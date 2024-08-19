
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
					data: []
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
				  markPoint: {
					    data: [{
						      type: "max",
						      name: "\u6700\u5927\u503c"
					    }]
				  },
					type: "line",				  
					stack: "\u603b\u91cf",
					data: [320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,992,88]
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
		
		
		CoreUtil.sendAjax(adminname,null,function (res) {                   
            if(res.xdata != null && res.ydata != null ){             	 
               n[0].xAxis[0].data  = res.xdata;	
               n[0].series[0].data = res.ydata;              
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
	

	e("personas", {})
});