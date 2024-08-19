layui.define(["table", "form"],
function(t) {
    var e = (layui.$, layui.admin),
    i = layui.view,
    n = layui.table,
    l = layui.form;
    n.render({
        elem: "#LAY-app-content-list",
        url: "./json/content/list.js",
        cols: [[{
            type: "checkbox",
            fixed: "left"
        },
        {
            field: "id",
            width: 100,
            title: "\u6587\u7ae0ID",
            sort: !0
        },
        {
            field: "label",
            title: "\u6587\u7ae0\u6807\u7b7e",
            minWidth: 100
        },
        {
            field: "title",
            title: "\u6587\u7ae0\u6807\u9898"
        },
        {
            field: "author",
            title: "\u4f5c\u8005"
        },
        {
            field: "uploadtime",
            title: "\u4e0a\u4f20\u65f6\u95f4",
            sort: !0
        },
        {
            field: "status",
            title: "\u53d1\u5e03\u72b6\u6001",
            templet: "#buttonTpl",
            minWidth: 80,
            align: "center"
        },
        {
            title: "\u64cd\u4f5c",
            minWidth: 150,
            align: "center",
            fixed: "right",
            toolbar: "#table-content-list"
        }]],
        page: !0,
        limit: 10,
        limits: [10, 15, 20, 25, 30],
        text: "\u5bf9\u4e0d\u8d77\uff0c\u52a0\u8f7d\u51fa\u73b0\u5f02\u5e38\uff01"
    }),
    n.on("tool(LAY-app-content-list)",
    function(t) {
        var n = t.data;
        "del" === t.event ? layer.confirm("\u786e\u5b9a\u5220\u9664\u6b64\u6587\u7ae0\uff1f",
        function(e) {
            t.del(),
            layer.close(e)
        }) : "edit" === t.event && e.popup({
            title: "\u7f16\u8f91\u6587\u7ae0",
            area: ["550px", "550px"],
            id: "LAY-popup-content-edit",
            success: function(t, e) {
                i(this.id).render("app/content/listform", n).done(function() {
                    l.render(null, "layuiadmin-app-form-list"),
                    l.on("submit(layuiadmin-app-form-submit)",
                    function(t) {
                        t.field;
                        layui.table.reload("LAY-app-content-list"),
                        layer.close(e)
                    })
                })
            }
        })
    }),
    n.render({
        elem: "#LAY-app-content-tags",
        url: "./json/content/tags.js",
        cols: [[{
            type: "numbers",
            fixed: "left"
        },
        {
            field: "id",
            width: 100,
            title: "ID",
            sort: !0
        },
        {
            field: "tags",
            title: "\u5206\u7c7b\u540d",
            minWidth: 100
        },
        {
            title: "\u64cd\u4f5c",
            width: 150,
            align: "center",
            fixed: "right",
            toolbar: "#layuiadmin-app-cont-tagsbar"
        }]],
        text: "\u5bf9\u4e0d\u8d77\uff0c\u52a0\u8f7d\u51fa\u73b0\u5f02\u5e38\uff01"
    }),
    n.on("tool(LAY-app-content-tags)",
    function(t) {
        var n = t.data;
        "del" === t.event ? layer.confirm("\u786e\u5b9a\u5220\u9664\u6b64\u5206\u7c7b\uff1f",
        function(e) {
            t.del(),
            layer.close(e)
        }) : "edit" === t.event && e.popup({
            title: "\u7f16\u8f91\u5206\u7c7b",
            area: ["450px", "200px"],
            id: "LAY-popup-content-tags",
            success: function(t, e) {
                i(this.id).render("app/content/tagsform", n).done(function() {
                    l.render(null, "layuiadmin-form-tags"),
                    l.on("submit(layuiadmin-app-tags-submit)",
                    function(t) {
                        t.field;
                        layui.table.reload("LAY-app-content-tags"),
                        layer.close(e)
                    })
                })
            }
        })
    }),
    n.render({
        elem: "#LAY-app-content-comm",
        url: "./json/content/comment.js",
        cols: [[{
            type: "checkbox",
            fixed: "left"
        },
        {
            field: "id",
            width: 100,
            title: "ID",
            sort: !0
        },
        {
            field: "reviewers",
            title: "\u8bc4\u8bba\u8005",
            minWidth: 100
        },
        {
            field: "content",
            title: "\u8bc4\u8bba\u5185\u5bb9",
            minWidth: 100
        },
        {
            field: "commtime",
            title: "\u8bc4\u8bba\u65f6\u95f4",
            minWidth: 100,
            sort: !0
        },
        {
            title: "\u64cd\u4f5c",
            width: 150,
            align: "center",
            fixed: "right",
            toolbar: "#table-content-com"
        }]],
        page: !0,
        limit: 10,
        limits: [10, 15, 20, 25, 30],
        text: "\u5bf9\u4e0d\u8d77\uff0c\u52a0\u8f7d\u51fa\u73b0\u5f02\u5e38\uff01"
    }),
    n.on("tool(LAY-app-content-comm)",
    function(t) {
        var n = t.data;
        "del" === t.event ? layer.confirm("\u786e\u5b9a\u5220\u9664\u6b64\u6761\u8bc4\u8bba\uff1f",
        function(e) {
            t.del(),
            layer.close(e)
        }) : "edit" === t.event && e.popup({
            title: "\u7f16\u8f91\u8bc4\u8bba",
            area: ["450px", "300px"],
            id: "LAY-popup-content-comm",
            success: function(t, e) {
                i(this.id).render("app/content/contform", n).done(function() {
                    l.render(null, "layuiadmin-form-comment"),
                    l.on("submit(layuiadmin-app-com-submit)",
                    function(t) {
                        t.field;
                        layui.table.reload("LAY-app-content-comm"),
                        layer.close(e)
                    })
                })
            }
        })
    }),
    t("contlist", {})
});