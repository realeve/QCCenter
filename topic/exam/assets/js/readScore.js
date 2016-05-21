require.config({　　　　
    baseUrl: "assets/js",
    paths: {　　　　　　
        "jquery": "jquery.min",
        　　　　　　"jquery.fullPage": "jquery.fullPage.min",
        "echarts": "echarts.common.min"
    },
    shim: {　　　　
        'jquery.fullPage': {　　　　　　
            deps: ['jquery']　　　
        }　
    }　　
});

require(['jquery', 'echarts', 'jquery.fullPage'], function($, echarts) {

    var dom = document.getElementById("container"),
        myChart;
    var gb = {
        colors: {
            white: "#FFF",
            whiteLight: "rgba(255, 255, 255, 0.2)",
            whiteLighter: "rgba(255, 255, 255, 0.1)",
            primary: "#556fb5",
            primaryLight: "#889acb"
        }
    };

    var initOption = function() {
        var option = {
            backgroundColor: '#293c55',
            color: ['rgba(255,255,255,0.6)'],
            title: {
                x: 'center',
                y: '20',
                align: 'left',
                textStyle: {
                    color: '#fafafa',
                    fontSize: 24
                },
                text: '技质部建模人员基础测试'
            },
            grid: {
                borderWidth: 0,
                x: 15,
                y: 60,
                x2: 15,
                y2: 35
            },
            yAxis: [{
                type: 'category',
                "show": false,
                data: []
            }],
            xAxis: [{
                type: 'value',
                splitLine: {
                    show: !0,
                    lineStyle: {
                        type: "dashed",
                        color: gb.colors.whiteLighter
                    }
                },
                axisLine: {
                    show: !1
                },
                axisTick: {
                    show: !1
                },
                boundaryGap: 0,
                axisLabel: {
                    textStyle: {
                        color: gb.colors.whiteLight
                    }
                }
            }],
            series: [{
                name: '得分',
                type: "bar",
                barMaxWidth: 80,
                areaStyle: {
                    normal: {
                        color: gb.colors.whiteLight
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                data: [],
                itemStyle: {
                    normal: {
                        color: gb.colors.whiteLight,
                        width: 1,
                        label: {
                            show: true,
                            textStyle: {
                                fontSize: 15,
                                color: '#fff'
                            },
                            position: 'insideRight',
                            formatter: '{b}:{c}分'
                        },
                        barBorderRadius: 2
                    }
                },
            }]
        };

        return option;
    };


    var refreshData = function() {
        var option = initOption();

        timeTicket = setInterval(function() {
            //动态读取数据
            $.ajax({
                url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getJZExamData',
                async: false
            }).done(function(score) {
                option.yAxis[0].data = [];
                option.series[0].data = [];
                score.map(function(data) {
                    option.yAxis[0].data.push(data.user_name);
                    option.series[0].data.push(data.score);
                });
                //console.log(JSON.stringify(option));
                myChart.setOption(option);
            });
        }, 1000);
    };

    $('#fullpage').fullpage({
        sectionsColor: ['#293c55']
    });

    myChart = echarts.init(dom);
    refreshData();

    $(window).resize(function() {
        myChart.resize();
    });
});