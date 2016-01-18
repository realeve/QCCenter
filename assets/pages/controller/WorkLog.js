var WorkLogInit = function() {

    var gbMachineData;
    function GetProdAndMachine() {
      var url = getRootPath(1) + "/assets/pages/controller/data/worklog_settings.json";
      $.get(url,function(json){
        gbMachineData = json;
      });
    }
    
    function GetLogString(data,keyWord){
      var TimeHead = "<div class=\"timeline-item\"><div class=\"timeline-badge\"><div class=\"timeline-badge\"><img class=\"timeline-badge-userpic\" src=\"" + getRootPath(0)+ "/assets/pages/media/users/realeve.jpg\"></div></div><div class=\"timeline-body\"><div class=\"timeline-body-arrow\"></div><div class=\"timeline-body-head\"><div class=\"timeline-body-head-caption\"><a href=\"#\" class=\"timeline-body-title font-blue-madison\">";
      var TimeTitle = "</a><span class=\"timeline-body-time font-grey-cascade\">发表于" + data.rec_time + " <span class=\"badge badge-round badge-success\">" +data.ClassName + "</span></small>";
      var TimeButton,strErrDesc;
      var statusClass,oper,strOper;

      strErrDesc = GBK2UTF(data.ErrDesc);
      if (keyWord!=="") {
        strErrDesc = strErrDesc.replace(new RegExp(keyWord,'g'),"<span class=\"caption-subject bold font-yellow-casablanca\" style=\"font-size: 16px; line-height: 18px;\">"+ keyWord+ "</span>");
      }

      oper = data.oper_name.split(',');
      /*strOper="";
      oper.map(function(elem) {
        strOper+="<span>"+ elem +"</span> ";
      });*/
      statusClass = (data.proStatus_id<4)?'btn-success':'btn-danger';
      if(data.proc_id === 0){
        data.machineName = gbMachineData.paper.machine[data.machine_id];
        data.productName = gbMachineData.paper.product[data.prod_id];
      }else{
        data.machineName = gbMachineData.banknote.machine[data.machine_id];
        data.productName = gbMachineData.banknote.product[data.prod_id];
      }

      TimeButton = "</span></div><div class=\"timeline-body-head-actions\"><div class=\"btn-group\"><button class=\"btn btn-circle "+ statusClass +" btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-close-others=\"true\">操作 <i class=\"fa fa-angle-down\"></i></button><ul class=\"dropdown-menu pull-right\" role=\"menu\" data-sn="+ data.ID +"><li><a href=\""+getRootPath(0)+"/worklog/editlog?ID=" + data.ID + "\"><i class=\"icon-pencil\"></i>&nbsp;&nbsp;编辑 </a></li>";
      TimeButton += "<li><a data-sn="+ data.ID + " class=\"del\" data-toggle=\"confirmation\" data-singleton=\"true\" data-popout=\"true\" data-placement=\"left\" data-title=\"确定删除该条日志?\" data-btn-ok-label=\"是\" data-btn-ok-icon=\"icon-trash\" data-btn-ok-class=\"btn-success\" data-btn-cancel-label=\"取消\" data-btn-cancel-icon=\"icon-close\" data-btn-cancel-class=\"btn-danger\"><i class=\"icon-trash\"></i>&nbsp;&nbsp;删除 </a></li>";
      if (data.proStatus_id>3) {
        TimeButton += "<li class=\"divider\"></li><li><a data-sn="+ data.ID +" class=\"complete\" data-toggle=\"confirmation\" data-singleton=\"true\" data-popout=\"true\" data-placement=\"left\" data-title=\"确定标记为已完成?\" data-btn-ok-label=\"是\" data-btn-ok-icon=\"icon-check\" data-btn-ok-class=\"btn-success\" data-btn-cancel-label=\"取消\" data-btn-cancel-icon=\"icon-close\" data-btn-cancel-class=\"btn-danger\"><i class=\"icon-check\"></i>&nbsp;&nbsp;标记为已完成 </a></li>";
      }
      TimeButton += "</ul></div></div></div><div class=\"timeline-body-content\"><span class=\"font-grey-cascade\">"+strErrDesc+"</span>";

      TimeButton += "<hr><div class=\"col-md-6 font-grey-cascade\">问题描述：<span>"+ data.MainErrDesc +"/" + data.SubErrDesc +"</span></div>";
      TimeButton += "<div class=\"col-md-6 font-grey-cascade\">操作人员：<span>"+ oper +"</span></div>";
      TimeButton += "<div class=\"col-md-6 font-grey-cascade\">机台：<span data-sn=\""+ data.machine_id +"\">"+ data.machineName +"</span></div>";
      TimeButton += "<div class=\"col-md-6 font-grey-cascade\">品种：<span data-sn=\""+ data.prod_id +"\">"+ data.productName +"</span></div>";
      TimeButton += "<div class=\"col-md-6 font-grey-cascade\">相关车号：<span data-sn=\""+ data.prod_id +"\">"+ data.prod_info +"</span></div>";
      TimeButton += "<div class=\"col-md-6 font-grey-cascade\">处理结果：<span data-sn=\""+ data.prod_id +"\">"+ data.StatusName +"</span></div>";
      TimeButton += "</div></div></div></div>";
      return TimeHead + data.rec_user_name + TimeTitle + TimeButton;
    }

  //查询工作日志
  function QueryWorkLogData() {
    var TimeRange = $("#dashboard-report-range span").html();
    var strUrl = getRootUrl('worklog') + "QueryLogInfo";
    var keyWord = $("#KeyWord").val();
    var iData = {
      proc_id: $("#proc_id").val(),
      Status: $("#ProStatus").val(),
      KeyWord: UTF2GBK(keyWord),
      TimeStart: TimeRange.split(' ~ ')[0],
      TimeEnd: TimeRange.split(' ~ ')[1],
      icurID: $('.timeline-item').length?$('.timeline-item ul').attr('data-sn'):0
    };

    $.post(strUrl,iData,function(data, status) {
        var obj = jQuery.parseJSON(data);
        if (obj.rows > 0) {
          bsTips('共查询出'+obj.rows+'条数据',1);
          for (var i = obj.rows - 1; i >= 0; i--) {
            $(".timeline:first").prepend(GetLogString(obj.data[i],keyWord));
            $('a.del').first().confirmation();
            $('a.complete').first().confirmation();
          }
        } else {
          bsTips("该搜索条件范围内无日志，请重新设置!</br>错误信息：" + status + "</br>返回值:" + data, 1);
        }
      }
    );
  }

  //保存设置
  function ReadLogSettings() {
    var strUrl = getRootUrl('worklog') + "ReadLogQuerySettings";
    $.ajax({
      type: 'POST',
      async: false,
      url: strUrl,
      success: function(data) {
        var strJSON = jQuery.parseJSON(data);
        var obj = strJSON.data[0];
        //设置控件初始值
        $("#proc_id").val(obj.ProcID); //关注工序
        $("#ProStatus").val(obj.Status); //处理状态
        $("#RefreshTime").val(obj.RefreshTime); //轮询时间
        if (obj.AutoRefresh === 0) $("#AutoRefresh").bootstrapSwitch('toggleState'); //如果需要关
      }
    });
  }

  return {
    init: function() {
      ReadLogSettings();
      QueryWorkLogData();
      GetProdAndMachine();
      //查询
      $("#QueryData").on('click',function() {
          $('.timeline').html('');
          QueryWorkLogData();
        }
      );

      //删除
      $(document).on('confirmed.bs.confirmation','a.del', function() {
        var strUrl = getRootPath()+"/DataInterface/update";
        var obj = $(this);
        var iData = {
          "tbl":25,
          "id":obj.attr('data-sn'),
          "HideLog":1
        };
        $.post(strUrl, iData,function(data, status) {
            if (status == "success") {
              obj.parents('.timeline-item').remove();
              bsTips('日志删除成功',2);
            } else {
              bsTips("删除失败，请稍后重试或联系管理员!", 0);
              infoTips(JSON.stringify(data));
            }
          }
        );
      });

      //标记为完成
      $(document).on('confirmed.bs.confirmation', 'a.complete',function() {
        var strUrl = getRootPath()+"/DataInterface/update";
        var obj = $(this);
        var iData = {
          "tbl":25,
          "id":obj.attr('data-sn'),
          "proStatus_id":1
        };
        $.post(strUrl, iData,function(data, status) {
            if (status == "success") {
              //更改标记状态
              obj.parents('.btn-group').find('.dropdown-toggle').removeClass('btn-danger');
              obj.parents('.btn-group').find('.dropdown-toggle').addClass('btn-success');
              //删除该按钮
              obj.parent().parent().find('.divider').remove();
              obj.parent().remove();
              bsTips('日志状态修改成功',2);
            } else {
              bsTips("日志状态修改失败，请稍后重试或联系管理员!", 0);
              infoTips(JSON.stringify(data));
            }
          }
        );
      });

      //查询工作日志
      $("#SaveSettings").on('click',function() {
          //获取各控制值
          var ProcID = $("#proc_id").val(); //关注工序
          var Status = $("#ProStatus").val(); //处理状态
          var RefreshTime = $("#RefreshTime").val(); //轮询时间
          var AutoRefresh = ($("#AutoRefresh").bootstrapSwitch('state') === true) ? 1 : 0;
          var strUrl = getRootUrl('worklog') + "SaveLogQuerySettings";
          $.post(strUrl, {
              ProcID: ProcID,
              Status: Status,
              RefreshTime: RefreshTime,
              AutoRefresh: AutoRefresh
            },
            function(data, status) {
              if (status == "success") {
                var obj = jQuery.parseJSON(data);
                infoTips(obj.message, 1);
              } else {
                infoTips("保存设置失败，请稍后重试或联系管理员!", 0);
              }
            }
          );
        });

      //查询
      $('#dashboard-report-range').on('apply.daterangepicker', function() {
          $('.timeline').html('');//先清空数据
          QueryWorkLogData();
      });
    }
  };
}();

jQuery(document).ready(function() {
  UIIdleTimeout.init();
  initDashboardDaterange('YYYY-MM-DD');
  initDom();
  WorkLogInit.init(); //初始化表单
});
jQuery(window).resize(function() {
  HeadFix();
});
//插入工作日志