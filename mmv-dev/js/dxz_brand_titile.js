$(function () {
    
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 网络请求
    $.ajax({
        type: "get",
        url: "http://58.218.199.45:14985/api/getbrandtitle",
        // data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
            console.log(response.result[1].brandTitle);
            $('#jsbrand-title').html(template('tmpl-brand-title',{
                result:response.result
            }));

        }
    });
})

// window.onload = function () {
//     $(function () {
//         var a, t, n;
//         a = {
//             api: "http://58.218.199.45:14985/api/getbrandtitle",
//             callback: function (a) {
//                 for (var t = a.result, n = [/电视/, /空调/, /播放器|影院/, /冰箱/, /洗衣机|热水/, /手机/, /相机/], e = $(".panel-body").children("ul"), l = 0; l < t.length; l++) {
//                     var r = document.createElement("li");
//                     (r = $("<li></li>")).html(t[l].brandTitle);
//                     var i = $("<a></a>");
//                     i.attr({
//                         href: "brand-content.html?brandtitleid=" + t[l].brandTitleId,
//                         "data-title-id": a.result.categoryId
//                     }), r.append(i[0]);
//                     for (var d = 0; d < n.length; d++) n[d].test(t[l].brandTitle) && e.eq(d).append(r)
//                 }
//             }
//         }, t = a.api || "", n = a.callback || function () {}, $.ajax({
//             url: t,
//             success: function (a) {
//                 n && n(a)
//             }
//         })
//     })
// };