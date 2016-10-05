var ec = [];
var search = function() {

	//公共函数
	/**
	 * [convertGZInfo 冠字信息转换为搜索起始值]
	 * @param  {[type]} str     [冠字号]
	 * @param  {[type]} strProd [品种名]
	 * @return {[type]}         [description]
	 */
	var convertGZInfo = function(str, strProd) {

		//字符退位
		function minusChar(strAlpha) {

			strAlpha = strAlpha.toUpperCase();

			if (strAlpha == 'A') {
				return 'Z';
			}
			var code = strAlpha.charCodeAt() - 1;
			return String.fromCharCode(code);
		}

		//数字补齐
		function int2String(strNum, iLen) {
			iLen = iLen || 4;
			strNum = '000' + strNum;
			return jsRight(strNum, iLen);
		}

		/**
		 * [getCodeRange 获取号码范围]
		 * @param  {[type]} strInfo [冠字信息]
		 * @return {[type]}         [号码范围]
		 */
		function getCodeRange(str, strProd) {

			var strInfo = {
				num: parseInt(str.replace(/[A-Za-z]/g, ''), 10),
				alpha: str.replace(/[0-9]/g, '').toUpperCase(),
				kNum: (strProd == '9602A' || strProd == '9603A') ? 40 : 35
			};


			var range = {
				start: strInfo.num - strInfo.kNum,
				end: strInfo.num
			};

			var alphaList = {
				start: strInfo.alpha[0],
				end: strInfo.alpha[1]
			};

			var alphaList2 = {
				start: strInfo.alpha[0],
				end: strInfo.alpha[1]
			};

			range.start2 = range.start;
			range.end2 = range.end;

			//是否退万
			if (range.start < 0) {

				//需要退万产品，[start-9999]
				range.start += 10000;
				range.end = 9999;

				//需要退万产品，[0-end]
				range.start2 = 0;


				//字符退位处理(末位需处理)
				//退末位
				alphaList.end = minusChar(alphaList.end);

				//末位为A，首位也需退位
				if (alphaList2.end == 'A') {
					alphaList.start = minusChar(alphaList.start);
				}

			}

			return {

				alpha: alphaList,
				start: int2String(range.start),
				end: int2String(range.end),

				alpha2: alphaList2,
				start2: int2String(range.start2),
				end2: int2String(range.end2),
				codeNum: strInfo.num
			};

		}

		//字符串之间加星
		function addStarBtwStr(alphaList, num) {
			var stars = '';
			for (var i = 0; i < num; i++) {
				stars += '*';
			}
			return alphaList.start + stars + alphaList.end;
		}

		var gzInfo = getCodeRange(str, strProd);

		var gz = [/^[A-Za-z]{2}\d{4}$/, /^[A-Za-z]\d[A-Za-z]\d{3}$/, /^[A-Za-z]\d{2}[A-Za-z]\d{2}$/];

		for (var i = 0; i < 3; i++) {
			if (gz[i].test(str)) {
				gzInfo.alpha = addStarBtwStr(gzInfo.alpha, i);
				gzInfo.alpha2 = addStarBtwStr(gzInfo.alpha2, i);
				break;
			}
		}

		return gzInfo;
	};

	//根据起始冠字及指定号码获取开位信息
	function getKinfo(end, start) {
		var num = parseInt(end, 10) - parseInt(start, 10);
		if (num < 0) {
			num += 10000;
		}
		num++;
		return num;
	}

	//查询字符串
	//品种/车号（冠字号）/印码号/大张号
	var queryString = {
		prod: '',
		cart: '',
		codeNo: '',
		paperNo: '',
		type: 0
	};

	//全局车号信息
	var cartInfo = {};

	function getInputData() {
		//get data
		queryString.cart = $('[name="cart"]').val().trim().toUpperCase();
		queryString.codeNo = $('[name="codeNo"]').val().trim();
		queryString.paperNo = $('[name="paperNo"]').val().trim();
	}

	function getCartData(updateHisInfo) {

		//匹配查询类型
		queryString.type = judgeSearchType(queryString.cart);

		//是否是本页面链接点击进入
		if (typeof updateHisInfo == 'undefined') {
			queryString.updateHisInfo = true;
		} else {
			queryString.updateHisInfo = updateHisInfo;
		}

		var showPanel = false;

		switch (queryString.type) {
			case config.search.ERR:
				bsTips('请输入有效的车号或冠字信息');
				showPanel = true;
				break;
			case config.search.GZ:
				if (queryString.prod === '') {
					bsTips('冠字号查询需选择品种信息');
					showPanel = true;
				} else {
					getCartInfo(queryString);
				}
				break;
			case config.search.CART:
				//
				if (queryString.codeNo !== '' && queryString.codeNo.length == 4) {
					queryString.type = config.search.CODENO;
				} else if (queryString.paperNo !== '' && queryString.paperNo.length == 4) {
					queryString.type = config.search.PAPERNO;
				}

				getCartInfo(queryString);
				break;
			case config.search.CODE:
				//印码号查询相关信息
				break;
		}

		if (showPanel) {
			$('[name="querySetting"]').click();
		}

	}

	var renderProdInfo = function(data) {
		tpl.render('search/prodinfo.etpl', data, $('[name="prodInfo"]'));
		tpl.render('search/cartinfo.etpl', data.data[0], $('[name="cartInfo"]'));
	};

	var getStorageInfo = function(mid) {
		//缓存一天
		var url = getRootPath(1) + "/DataInterface/Api?Token=" + config.TOKEN + "&ID=285&M=3&mid=" + mid + '&cache=1440';
		var data = ReadData(url);

		//显示头部(默认不显示)
		data.showHead = 1;
		tpl.render('simpleTable.etpl', data, $('[name="storageInfo"]'));
	};

	var handleQualityLine = function(cartInfo) {
		if (cartInfo.TechTypeName !== '码后核查') {
			$('[name=qualityLine]').hide();
			$('[name="hisCartList"]').hide();
			return;
		}

		$('[name=qualityLine]').show();
		$('[name="hisCartList"]').show();

		var chartData = {
			xAxis: [],
			yAxis: [],
			type: 'line'
		};

		//当天生产的其它产品(按车号)
		//282
		//select a.id,a.CartNumber,GoodRate,FormatPos1,ErrCount1,ImgVerify1 from MaHouData a INNER JOIN (SELECT ProduceDate,MachineID FROM MaHouData where id = 39555) b on a.MachineID = b.MachineID and a.ProduceDate = b.ProduceDate order by a.id
		//缓存一天  60*24=1440
		var url = getRootPath(1) + "/DataInterface/Api?Token=" + config.TOKEN + "&ID=282&M=3&cart=" + cartInfo.CartNumber + '&cache=1440';
		var data = ReadData(url);
		data.data.map(function(elem) {
			chartData.xAxis.push(elem[1]);
			chartData.yAxis.push(elem[2]);

			//获取mahouID
			if (elem[1] == cartInfo.CartNumber) {
				cartInfo.MahouID = elem[0];
				//获取库管信息
				getStorageInfo(cartInfo.MahouID);
			}
		});

		ec[0] = echarts.init(document.getElementById("chart"));
		var option = getSimpleEChart(chartData);
		ec[0].setOption(option);

		//历史车号列表
		tpl.render('search/hisCartList.etpl', data, $('[name="hisCartList"]'));
	};

	function setTipInfo() {
		var times = today(1).replace(' ', 'T') + '+08';
		var str = '<div class="note note-danger margin-top-30"> <h4>该万产品未搜索到相关车号信息 <p class="margin-top-10">' +
			'			<i class="fa fa-pencil"></i> <span>质量控制中心  发表于 <span name="isodate" title="' + times + '"></span> </span>' +
			'		</p></h4></div>';
		$('[name="prodInfo"]').html(str);

		$("[name=isodate]").prettyDate({
			interval: 10000
		});
	}

	function setEptStr() {

		setTipInfo();

		$('[name="cartName"]').text(queryString.cart);

		$('[name="cartInfo"]').html('');
		$('[name=qualityLine]').hide();
		$('[name="hisCartList"]').hide();
		$('[name=storageInfo]').hide();

		$('#intaglio').html('');
		$('#offset').html('');

		$('[name="mahouInfo"]').html('<h4> 该万产品未搜索到相关信息 </h4>');
		$('[name="mahouImg"]').html('');
		ec[1].dispose();

		$('[name="screenInfo"]').html('<h4> 该万产品未搜索到相关信息 </h4>');
		$('[name="siyinImg"]').html('');

	}

	function toggleScreenPrint(cart) {
		if (cart.substring(3, 2) == '8') {

			$('#portlet_tab1').removeClass('hidden');
			$('[href="#portlet_tab1"]').parent().removeClass('hidden');

		} else {

			if (!$('#portlet_tab1').hasClass('hidden')) {
				$('#portlet_tab1').addClass('hidden');
				$('[href="#portlet_tab1"]').parent().addClass('hidden');
			}
		}
	}

	//根据工序名(首个汉字)获取起始时间
	function getDateRangeByProdName(prodList, prodName) {
		var dateRange = {
			start: '',
			end: ''
		};
		prodList.map(function(item) {
			//工序名称首字
			var strProc = jsLeft(item.ProcName, 1);
			if (prodName == strProc) {
				dateRange.end = item.StartDate;

				if (dateRange.start === '') {
					dateRange.start = item.StartDate;
				}
			}
		});
		if (dateRange.start !== '') {
			dateRange = {
				start: dateRange.start.split(' ')[0].replace(/-/g, ''),
				end: dateRange.end.split(' ')[0].replace(/-/g, '')
			};
		}
		return dateRange;
	}

	var handleOfflineInfo = function(prodList) {
		//车号
		var cartNo = prodList[0].CartNumber.trim();
		//品种
		var prod = cartNo.substring(3, 2);
		//后3位数字部分用于离线检测数据检索
		cartNo = encodeURI('%') + jsRight(cartNo, 3) + encodeURI('%');

		//胶印离线
		var dtRng = getDateRangeByProdName(prodList, '胶');
		var url = getRootPath(1) + "/DataInterface/Api?Token=" + config.TOKEN + "&M=3&cart=" + cartNo + '&prod=' + prod;
		var strUrl = '&tstart=' + dtRng.start + '&tend=' + dtRng.end + '&ID=';

		//胶印离线检测质量信息
		//SELECT a.LotName 车号, a.MachineName 机台, a.CaptainName 机长, a.OperatorName 操作人员, a.SideName 正反面, a.KiloNum 千位, convert(varchar,a.ProduceTime,120) 生产时间, a.ScoreColor AS 墨色, a.ScoreIConn AS 接线, a.ScoreSafeCircle 安全圆, a.ScoreMixColor 混色, a.ScoreOverPrint 对印, a.ScoreLWInsp 线宽, a.Score AS 总分 FROM dbo.JWLXData AS a WHERE LotName like ? and ProductTypeID = ? and bIntaglio = 0 and ProduceDate between ? and ? order by 7
		//cart,prod,tstart,tend
		//287
		//缓存一天
		var data = ReadData(url + strUrl + '287' + '&cache=1440');

		tpl.render('simpleTable.etpl', data, $('#offset'));

		//凹印离线
		dtRng = getDateRangeByProdName(prodList, '凹');
		strUrl = '&tstart=' + dtRng.start + '&tend=' + dtRng.end + '&ID=';

		//凹印离线检测质量信息
		//SELECT a.LotName 车号, a.MachineName 机台, a.CaptainName 机长, a.OperatorName 操作人员, a.SideName 正反面, a.KiloNum 千位, a.ProduceTime, a.ScoreColor 墨色, a.ScoreOIOver 套印, a.ScoreIConn 接线, a.Score 总分 FROM dbo.JWLXData AS a WHERE LotName like ? and ProductTypeID = ? and bIntaglio = 1 and ProduceDate between ? and ? order by 7
		//cart,prod,tstart,tend
		//286
		//缓存一天
		data = ReadData(url + strUrl + '286' + '&cache=1440');
		tpl.render('simpleTable.etpl', data, $('#intaglio'));

	};
	/**
	 * [convertImgData2Tpl 接口数据转换为tpl图像模板格式数据]
	 * @param  {[type]} cartID  [车号ID]
	 * @param  {[type]} imgType [图像类型]
	 * @return {[type]}         [转换后数据]
	 */
	function convertImgData2Tpl(data) {
		//289 丝印图像数据
		//SELECT ErrImage1,ErrImage2,ErrImage3 FROM ImageData where SiyinID=?
		//t,blob

		var url = getRootPath(1) + "/DataInterface/Api?Token=" + config.TOKEN + "&M=3&blob=1&t=" + data.cartID + "&ID=" + (data.imgType ? 254 : 289);
		var imgData = ReadData(url);

		var imgInfo = {
			data: []
		};

		var offset = (data.imgType ? 4 : 3);

		for (var i = 0; i < 3; i++) {
			var j = data.start + i * offset;
			imgInfo.data.push({
				mac: data.data[j],
				pos: data.data[j + 1],
				num: data.data[j + 2],
				img: imgData.data[0][i],
				type: (data.imgType ? data.data[j + 3] : '0')
			});
		}
		return imgInfo;
	}

	var handleScreenInfo = function(cart) {
		toggleScreenPrint(cart);
		if (cart.substring(3, 2) !== '8') {
			return;
		}
		//对应视图需修改：
		//丝印质量信息 a.FrontCount+SWCount+HWCount+TSCount AS [缺陷图像数]
		//SELECT a.id, c.machineName AS [机台], a.ProduceDate AS [生产日期], round(a.GoodRate, 2) AS [好品率], a.PrintCount AS [开印总数], a.NoCheckCount AS [未检数], a.FrontCount+SWCount+HWCount+TSCount AS [缺陷图像数], a.FrontCount AS 正面缺陷数, a.SWCount AS 丝网缺陷数, a.HWCount AS 红外缺陷数, a.TSCount AS 透视缺陷数, a.Mac1 AS 宏区1, a.FormatPos1 AS 开位1, a.ErrCount1 AS 报错条数1, a.Mac2 AS 宏区2, a.FormatPos2 AS 开位2, a.ErrCount2 AS 报错条数2, a.Mac3 AS 宏区3, a.FormatPos3 AS 开位3, a.ErrCount3 AS 报错条数3 FROM dbo.SiYinData AS a INNER JOIN dbo.machineData AS c ON a.machineID = c.ID WHERE a.[CartNumber] =?
		//cart
		var url = getRootPath(1) + "/DataInterface/Api?Token=" + config.TOKEN + "&ID=288&M=3&cart=" + cart;
		var data = ReadData(url);
		if (data.rows === 0) {
			$('[name="screenInfo"]').html('<h4> 该万产品未搜索到相关信息 </h4>');
			$('[name="siyinImg"]').html('');
			return;
		}
		var qua = {
			title: data.title,
			rows: data.rows,
			cols: data.cols,
			source: data.source,
			header: data.header.slice(1, 11),
			data: data.data[0].slice(1, 11)
		};
		//qua.data.push(data.data[0].slice(1, 11));
		tpl.render('search/screenQuality.etpl', qua, $('[name="screenInfo"]'));

		var imgInfo = convertImgData2Tpl({
			data: data.data[0],
			start: 11, //数组第11个数据开始
			imgType: 0, //丝印
			cartID: data.data[0][0]
		});

		tpl.render('imglist.etpl', imgInfo, $('[name="siyinImg"]'));
	};

	var setMahouChart = function(data) {
		var chartData = {
			xAxis: [],
			yAxis: [],
			type: 'bar'
		};

		for (var i = 28; i < 37; i++) {
			chartData.xAxis.push(data.header[i].title);
			chartData.yAxis.push(data.data[0][i]);
		}

		ec[1] = echarts.init(document.getElementById("mahouChart"));
		var option = getSimpleEChart(chartData, 1);

		//option处理
		option.tooltip.formatter = '{b}路:{c}条';
		delete option.yAxis.max;

		ec[1].setOption(option);
	};

	var handleMahouInfo = function(cart) {

		//码后核查质量信息查询
		//SELECT a.id,c.MachineName AS [机台], a.ProduceDate AS [生产日期], a.GoodRate AS [好品率], a.ErrPicCount AS [缺陷条数], a.PMCount AS [票面条数], a.TSCount AS [透视条数], a.NoCheckCount AS [未检条数], a.HMCount AS [号码条数], a.YGCount AS [荧光条数], a.FrontCount AS [正面缺陷数], a.BackCount AS 背面缺陷数, a.SWCount AS [丝网缺陷数], a.TSCount AS [透视缺陷数], a.BlackImgCount AS 黑图数, a.FakePieceCount AS 大张废, a.Mac1 AS [宏区1], a.FormatPos1 AS [开位1], a.ErrCount1 AS [报错条数1], a.ImgVerify1 AS [判废结果1], a.Mac2 AS [宏区2], a.FormatPos2 AS [开位2], a.ErrCount2 AS [报错条数2], a.ImgVerify2 AS [判废结果2], a.Mac3 AS [宏区3], a.FormatPos3 AS [开位3], a.ErrCount3 AS [报错条数3],  a.ImgVerify3 AS [判废结果3], a.F1Count AS [正1], a.F2Count AS [正2], a.F3Count AS [正3], a.F4Count AS [正4], a.F5Count AS [正5], a.BS1Count AS 精1, a.BS2Count AS 精2, a.BS3Count AS 精3, a.BS4Count AS 精4 FROM dbo.MaHouData AS a INNER JOIN dbo.MachineData AS c ON a.MachineID = c.ID where CartNumber = ?
		//cart
		//290

		var url = getRootPath(1) + "/DataInterface/Api?Token=" + config.TOKEN + "&ID=290&M=3&cart=" + cart;
		var data = ReadData(url);
		if (data.rows === 0) {
			$('[name="mahouInfo"]').html('<h4> 该万产品未搜索到相关信息 </h4>');
			$('[name="mahouImg"]').html('');
			ec[1].dispose();
			return;
		}

		setMahouChart(data);

		var qua = {
			title: data.title,
			rows: data.rows,
			cols: data.cols,
			source: data.source,
			header: data.header.slice(1, 15),
			noScroll: 1,
			data: [] //纵向排列 data.data[0].slice(1, 15)
		};

		qua.data.push(data.data[0].slice(1, 15));
		//tpl.render('search/screenQuality.etpl', qua, $('[name="mahouInfo"]'));

		tpl.render('simpleTable.etpl', qua, $('[name="mahouInfo"]'));

		var imgInfo = convertImgData2Tpl({
			data: data.data[0],
			start: 16, //数组第16个数据开始
			imgType: 1, //核查
			cartID: data.data[0][0]
		});

		tpl.render('imglist.etpl', imgInfo, $('[name="mahouImg"]'));

	};


	//根据车号查询生产信息
	var getCartInfo = function(obj) {
		//重置车号信息
		cartInfo = {};

		var strUrl = getRootPath(1) + "/DataInterface/Api?Token=" + config.TOKEN + "&ID=";
		var url, data;

		//step:1 机台作业信息
		if (obj.type == config.search.GZ) {
			//用冠字接口获取车号，后续数据由车号查询
			//284
			//SELECT DISTINCT a.CartNumber, a.CarNumber, a.GzNumber, a.TechTypeName, a.ProcName, a.WorkClassName, a.MachineName, a.CaptainName, a.TeamName, a.MonitorName, a.PrintNum,convert(varchar,a.StartDate,120) StartDate, a.ProductName, a.WorkInfo FROM dbo.CartInfoData AS a WHERE a.NoteAnayID > 0 AND ProductName = ? and ((CarNumber = ? AND GzNumber BETWEEN ? and ?) or (CarNumber = ? AND GzNumber BETWEEN ? and ?)) ORDER BY convert(varchar,a.StartDate,120)
			//param:prod,alpha,start,end,alpha2,start2,end2

			var param = convertGZInfo(obj.cart, obj.prod);
			url = strUrl + 284 + '&M=0&prod=' + obj.prod + '&alpha=' + param.alpha + '&start=' + param.start + '&end=' + param.end + '&alpha2=' + param.alpha2 + '&start2=' + param.start2 + '&end2=' + param.end2;
			data = ReadData(url);
			$('[name=prodNum]').html(data.rows);
			if (data.rows > 0) {
				//获取开位信息
				data.data[0].kInfo = getKinfo(param.codeNum, data.data[0].GzNumber);
			} else {
				setEptStr();
				return;
			}
		} else {
			//直接用车号获取生产信息

			//此处替换连接至机台作业系统读取信息
			//SELECT DISTINCT a.CartNumber,  a.CarNumber, a.GzNumber, a.TechTypeName, a.ProcName, a.WorkClassName, a.MachineName, a.CaptainName, a.TeamName, a.MonitorName, a.PrintNum, convert(varchar,a.StartDate,120) StartDate, a.ProductName, a.WorkInfo FROM dbo.CartInfoData AS a WHERE a.NoteAnayID > 0 AND a.CartNumber = ? ORDER BY convert(varchar,a.StartDate,120)
			//param:cart

			//数据缓存一天
			url = strUrl + 283 + '&M=0&cart=' + obj.cart + '&cache=1440';
			data = ReadData(url);
			$('[name=prodNum]').html(data.rows);
			if (data.rows > 0) {
				//仅搜索车号时，不返回开位信息
				data.data[0].kInfo = 0;
			} else {
				setEptStr();
				return;
			}
		}

		cartInfo = data.data[0];
		cartInfo.imgUrl = getRootPath(1) + "/search/fakeImg/#" + cartInfo.CartNumber;

		$('[name="cartName"]').text(cartInfo.CartNumber);

		//追加星期信息
		data.data.map(function(item, i) {
			data.data[i].WeekDay = getWeekdayByDate(item.StartDate);
			data.data[i].DateTitle = item.StartDate.replace(' ', 'T') + '+08';
		});

		//渲染机台作业信息
		renderProdInfo(data);

		if (obj.type == config.search.CODENO) {
			//印码号查询大张号（10张）


		} else if (obj.type == config.search.PAPERNO) {
			//大张号查询印码号

		}

		// step:2 库管信息

		// step:3 胶凹离线检测信息

		handleOfflineInfo(data.data);

		// step:4 丝印（T品）
		handleScreenInfo(cartInfo.CartNumber);

		// step:5 码后核查

		handleMahouInfo(cartInfo.CartNumber);

		//处理质量信息
		//载入特征图像，载入当天质量曲线
		//如果是本页面点击跳转的数据则不加载该部分数据
		if (queryString.updateHisInfo) {
			handleQualityLine(cartInfo);
			bsTips('历史信息加载完毕');
		}


		// step:7 图像判废结果

		// step:8 OCR信息

		// step:9 实废图像信息

		// infoTips('数据查询完毕');

	};

	var queryData = function() {
		//hide the panal
		$('.btn-theme-panel').removeClass('open');
		getInputData();
		getCartData();
	};

	$('.theme-colors > li', '.theme-panel').click(function() {
		queryString.prod = $(this).find('span').last().text();
		$('ul > li', '.theme-panel').removeClass("active");
		$(this).addClass("active");
	});

	$('#query').click(function() {
		queryData();
	});

	$('body').on('click', '[name=hiscart]', function() {
		var _self = $(this);
		queryString.cart = _self.attr('href').replace('#', '');
		var updateHisInfo = false;
		getCartData(updateHisInfo);
	});

	function loadDefaultData() {
		queryString.cart = window.location.hash.replace('#', '');
		if (queryString.cart !== '') {
			getCartData();
		}

	}

	return {
		//main function to initiate the module
		init: function() {

			hideSidebarTool();
			$('.theme-panel').first().remove();
			$('[name="qualityLine"]').hide();
			$('[name="hisCartList"]').hide();

			var tplList = [
				'search/prodinfo.etpl',
				'search/cartinfo.etpl',
				'simpleTable.etpl',
				'search/hisCartList.etpl',
				'search/screenQuality.etpl',
				'imglist.etpl'
			];
			tpl.init(tplList, loadDefaultData);
		}

	};
}();
//记录选择状态
jQuery(document).ready(function() {
	//隐藏按钮
	//$('.icon-logout').parent().hide();
	//$('.icon-login').hide();

	//RoundedTheme(0);
	UIIdleTimeout.init();
	initDashboardDaterange('YYYYMMDD');
	initDom();
	search.init();
	bsTips('点击本页面工序名称将自动折叠面板');
});

jQuery(window).resize(function() {
	ec[0].resize();
	ec[1].resize();
});