$(function () {
    $.getUrlParam = function (t) {
        var a = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
            c = window.location.search.substr(1).match(a);
        return null != c ? unescape(c[2]) : null
    };
    var t = $.getUrlParam("productid");
    $.ajax({
        type: "get",
        url: baseUrl + "/api/getdiscountproduct",
        data: {
            productid: t
        },
        success: function (t) {
            var a = template("discountProduct", t);
            $(".cu-content").html(a)
        }
    })
});