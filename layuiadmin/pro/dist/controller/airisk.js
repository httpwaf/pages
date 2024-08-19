
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
				tooltip: {
					trigger: "axis"
				},
				legend: {
					data: ["系统管理员", "用户登录", "流量"]
				},
				calculable: !0,
				xAxis: [{
					type: "category",
					boundaryGap: !1,
					data: ["09-01", "09-02", "09-03", "09-04", "09-05", "09-06", "09-07","09-08", "09-09", "09-10", "09-11", "09-12", "09-13", "09-14","09-15", "09-16", "09-17", "09-18", "09-19", "09-20", "09-21","09-22", "09-24", "09-24", "09-25", "09-26", "09-27", "09-28","09-29", "09-30"]
				}],
				yAxis: [{
					type: "value"
				}],
				series: [
				{
					name: "系统管理员",
					type: "line",
					itemStyle:{
              normal:{
              color:'#fc8a0f', //折点颜色
              lineStyle:{
                     color:'#ff9c35' //折线颜色
                    }
              }
           },
					stack: "\u603b\u91cf",
					data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,55,110]
				},
				{
					name: "用户登录",
					type: "line",
				
					stack: "\u603b\u91cf",
					data: [320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,992,88]
				},
				{
					name: "流量",
					type: "line",
					stack: "\u603b\u91cf",
					data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 66, 934, 1290, 55, 1320,820, 932, 901, 934, 1290, 1330, 1320,222,333]
				}]
			}],
		o = e("#LAY-index-dataview").children("div"),
		r = function(e) {
			i[e] = l.init(o[e], layui.echartsTheme),
			i[e].setOption(n[e]),
			a.resize(function() {
				i[e].resize()
			}),
			i[e].on('click', function (params) {
				var year = new Date();
				var str  = year.getFullYear() + '-' + params.name;
				
				/*CoreUtil.sendAjax(tablename + "?onlyfilter=1&date=" + str,null,function (res) {
            window.location.reload();
            
        },"GET",false);*/
		
				 
			})
		};
		
				
		CoreUtil.sendAjax("/bigdata/risk30.json?token=" + token,null,function (res) {                   
            if(res.xdata != null && res.ydata1 != null ){             	 
               n[0].xAxis[0].data  = res.xdata;	
               n[0].series[0].data = res.ydata1;
               n[0].series[1].data = res.ydata2;
               n[0].series[2].data = res.ydata3;
               r(0);
            }            
    },"GET",false);
		
			
		
         
		if (o[0]) {
			r(0);
			var u = 0;
			t.on("change(LAY-index-dataview)",
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
	function () {
		var e = layui.$,
		a = layui.admin,
		t = layui.carousel,
		l = layui.echarts,
		i = [],
		n = [{
							title: {
								text: "IP请求前10名",
							  x: "center",
								textStyle: {
									fontSize: 14
								}
							},
							tooltip: {
								trigger: "axis"
							},
							legend: {
								show: false,
								x:'right',
								padding:[0,-50,0,0],
								data: [""]
							},
							calculable: !0,
							xAxis: [{
								type: "value",
								name: "次",            
                axisLabel: {
                    formatter: '{value}'
                },
								boundaryGap: [0, 0.01]
							}],
							yAxis: [{
								type: "category",
								name: "IP地址", 
								axisLabel: {
                  show: true,
                  textStyle: {
                    color: "#1E9FFF"
                  }
                },
                grid :{
			    	     // left : '2%',
			    	      //right: '2%',
			    	      //bottom: '10%',
			    	      //containLabel :true
			          },
                data: []
						    //data: ["222.222.222.222","192.168.1.1", "222.222.2.2", "192.168.1.1","\u5df4\u897f", "\u5370\u5c3c", "\u7f8e\u56fd", "\u5370\u5ea6", "222.222.2.2", "192.168.1.1"]
							}],
							series: [{
								name: "2011\u5e74",
								type: "bar",
								smooth: !0,
								itemStyle: {
											normal: {
											color: "#1E9FFF"}
										},
								data:[]		
								//data: [182030, 172030, 162030, 152030, 132030, 102030, 82030, 72030, 77030, 382030]
							}]
						}],
		o = e("#LAY-index-normbar").children("div"),
		r = function(e) {
			i[e] = l.init(o[e], layui.echartsTheme),
			i[e].setOption(n[e]),
			a.resize(function() {
				i[e].resize()
			}),
			i[e].on('click', function (params) {
				//alert(params.name);
			
			})
		};
		

				CoreUtil.sendAjax(tablename,null,function (res) {			
			      if (res.data != null){ 
			          n[0].yAxis[0].data  = res.topx;	
                n[0].series[0].data = res.topy;
                r(0);
            } 
            
       },"GET",false);
		
   
	}),
		layui.use("table",
	function() {
		var e = (layui.$, layui.table);	
		e.render({
			elem: "#LAY-home-homepage-console1",
			url: "/bigdata/table1.json",
			cols: [[
			{
				type: "numbers",
				fixed: "left",
				width: 80
			},
			{
				field: "src_ip",
				title: "IP地址",
				width: 120
			},
			{
				field: "geoip",
				title: "地理位置",			
			},
			{
				field: "risk",
				title: "风险等级",
				width: 100,
				templet: function(e) {
					return "中" == e.risk ? '<del style="color: #5FB878;">' + e.risk + "</del>": "高" == e.risk ? '<span style="color: #FFB800;">' + 
					       e.risk + "</span>": '<span style="color: #FF5722;">' + e.risk + "</span>"
				}
			}]],
			skin: "line"
		})
	}),
	e("airisk", {})
});