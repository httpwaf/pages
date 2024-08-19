
layui.define(function(e) {
	layui.use(["admin", "carousel", "laydate"],
	function() {
		var e = layui.$,
		a = (layui.admin, layui.carousel),
		t = layui.element,
		l = layui.device();
		
		var laydate = layui.laydate;	
		laydate.render({
            elem: '#date'
            , type: 'date'
            ,theme: '#1E9FFF'
            , done: function (value, date, endDate) {
                if (value != null && value != undefined && value != "") {                	  
                    //alert(value);
                } 
            }
    });
        	
        	
		e(".layadmin-carousel").each(function() {
			var t = e(this);
			a.render({
				elem: this,
				width: "100%",
				arrow: "none",
				interval: t.data("interval"),
				autoplay: t.data("autoplay") === !0,
				trigger: l.ios || l.android ? "click": "hover",
				anim: t.data("anim")
			})
		}),
		t.render("progress")
	}),
	layui.use(["admin", "carousel", "echarts"],
	function() {
		var e = layui.$,
		a = layui.admin,
		t = layui.carousel,
		l = layui.echarts,
		i = [],
		n = [{
			title: {
				text: "",
				x: "center",
				textStyle: {
					fontSize: 14
				}
			},
			tooltip: {
				trigger: "axis"
			},
			legend: {
				data: ["", ""]
			},
			xAxis: [{
				type: "category",
				boundaryGap: !1,
				//data : x2data
				data: ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
			}],
			yAxis: [{
            type: 'value',
            name: '',           
            axisLabel: {
                formatter: '{value}'
            }
        }],
			series: [{
				name: "流量",
				type: "line",
				barWidth: 20,
				markPoint: {
					data: [{
						type: "max",
						name: "\u6700\u5927\u503c"
					},
					{
						type: "min",
						name: "\u6700\u5c0f\u503c"
					}]
				},
				markLine: {
					data: [{
						type: "average",			
						name: "\u5e73\u5747\u503c"
					}]
				},		

				//data : y2data
				data: [0, {
            value: 0,
            itemStyle: {
            	normal: {
                color: '#a90000'
              }
            }
        }, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}]
		},
		{
			title: {
				text: "一周趋势",
				x: "center",
				textStyle: {
					fontSize: 14
				}
			},
			tooltip: {
				trigger: "axis",
				formatter: "{b}<br>\u65b0\u589e\u7528\u6237\uff1a{c}"
			},
			xAxis: [{
				type: "category",
				data: ["11-07", "11-08", "11-09", "11-10", "11-11", "11-12", "11-13"]
			}],
			yAxis: [{
				type: "value"
			}],
			series: [{
				type: "line",
				data: [200, 300, 400, 610, 150, 270, 380]
			}]
		}],
		o = e("#LAY-index-dataview1").children("div"),
		r = function(e) {
			i[e] = l.init(o[e], layui.echartsTheme),
			i[e].setOption(n[e]),
			a.resize(function() {
				i[e].resize()
			}),
			i[e].on('click', function (params) {
				var year = new Date();
				var str  = year.getFullYear() + '-' + params.name;
				
				CoreUtil.sendAjax(filtername + "?onlyfilter=1&date=" + str,null,function (res) {
            window.location.reload();
            
        },"GET",false);
		
				 
			})
		};
		
		
		
		CoreUtil.sendAjax(tablename,null,function (res) {			
		  
            if(res.xdata != null && res.ydata0 != null ){             	 
               n[0].xAxis[0].data  = res.xdata;	
               n[0].series[0].data = res.ydata0;
              // n[0].series[1].data = res.ydata2;
              // n[0].title.text = res.title[0];
              $("#label1").html( res.title[0] + "日数据趋势");
               r(0);
            }
            
  },"GET",false);
		
			
		
         
		if (o[0]) {
			r(0);
			var u = 0;
			t.on("change(LAY-index-dataview1)",
			function(e) {
				r(u = e.index);
			}),
			layui.admin.on("side",
			function() {
				setTimeout(function() {
					r(u)
				},
				300)
			}),
			layui.admin.on("hash(tab)",
			function() {
				layui.router().path.join("") || r(u)
			})
		}
	}),
	
  layui.use(["admin", "carousel", "echarts"],
	function() {
		var e = layui.$,
		a = layui.admin,
		t = layui.carousel,
		l = layui.echarts,
		i = [],
		n = [{
			title: {
				text: "",
				x: "center",
				textStyle: {
					fontSize: 14
				}
			},
			tooltip: {
				trigger: "axis"
			},
			legend: {
				data: ["", ""]
			},
			xAxis: [{
				type: "category",
				boundaryGap: !1,	
				data: ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
			}],
			yAxis: [{
            type: 'value',
            name: '',           
            axisLabel: {
                formatter: '{value}'
            }
        }],
			series: [{
				name: "",
				type: "bar",
				barWidth: 20,
				markPoint: {
					data: [{
						type: "max",
						name: "\u6700\u5927\u503c"
					},
					{
						type: "min",
						name: "\u6700\u5c0f\u503c"
					}]
				},
				markLine: {
					data: [{
						type: "average",			
						name: "\u5e73\u5747\u503c"
					}]
				},	

				//data : y2data
				data: [0, {
            value: 0,
            itemStyle: {
            	normal: {
                color: '#a90000'
              }
            }
        }, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			}]
		},
		{
			title: {
				text: "一周趋势",
				x: "center",
				textStyle: {
					fontSize: 14
				}
			},
			tooltip: {
				trigger: "axis",
				formatter: "{b}<br>\u65b0\u589e\u7528\u6237\uff1a{c}"
			},
			xAxis: [{
				type: "category",
				data: ["11-07", "11-08", "11-09", "11-10", "11-11", "11-12", "11-13"]
			}],
			yAxis: [{
				type: "value"
			}],
			series: [{
				type: "line",
				data: [200, 300, 400, 610, 150, 270, 380]
			}]
		}],
		o = e("#LAY-index-dataview2").children("div"),
		r = function(e) {
			i[e] = l.init(o[e], layui.echartsTheme),
			i[e].setOption(n[e]),
			a.resize(function() {
				i[e].resize()
			}),
			i[e].on('click', function (params) {
				var year = new Date();
				var str  = year.getFullYear() + '-' + params.name;
				
				/*CoreUtil.sendAjax(filtername + "?onlyfilter=1&date=" + str,null,function (res) {
            window.location.reload();
            
        },"GET",false);*/
		
				 
			})
		};
		
		
		
		CoreUtil.sendAjax(tablename,null,function (res) {			  
                   
            if(res.x2data != null && res.y2data0 != null ){             	 
               n[0].xAxis[0].data  = res.x2data;	
               n[0].series[0].data = res.y2data0;
              // n[0].series[1].data = res.ydata2;
               //n[0].title.text = res.title[0];
              $("#label2").html( res.title[0] + "月数据趋势");
               r(0);
            }
            
  },"GET",false);
		
			
		
         
		if (o[0]) {
			r(0);
			var u = 0;
			t.on("change(LAY-index-dataview2)",
			function(e) {
				r(u = e.index);
			}),
			layui.admin.on("side",
			function() {
				setTimeout(function() {
					r(u)
				},
				300)
			}),
			layui.admin.on("hash(tab)",
			function() {
				layui.router().path.join("") || r(u)
			})
		}
	}),
	
	e("stat0", {})
});