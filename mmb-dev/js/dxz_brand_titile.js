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
            // console.log(response);
            var brandTitles = ['电视','空调','影音','冰箱','洗衣机','热水器','厨卫','手机','相机'];
            var brandRegex = [/电视/,/空调/,/播放器|影院|音箱/,/冰箱/,/洗衣机|干衣机|脱水机/,/热水器/,/手机/,/相机/];

            var dianshi = [],
                kongtiao = [],
                yingyin = [],
                bingxiang = [],
                xiyiji = [],
                reshuiqi = [],
                chuwei = [],
                shouji = [],
                xiangji = [];

            for(let i = 0; i < response.result.length; i++) {
                var brandTitle = response.result[i].brandTitle; 
                var brandTitleId = response.result[i].brandTitleId;
                var obj = {
                    brandTitle:brandTitle,
                    brandTitleId:brandTitleId 
                } 
        
                if(brandTitle.search(/电视/) != -1){
                    dianshi.push(obj);
                } else if(brandTitle.search(/空调/) != -1){
                    kongtiao.push(obj);
                } else if(brandTitle.search(/播放器|影院|音箱/) != -1){
                    yingyin.push(obj);
                } else if(brandTitle.search(/冰箱/) != -1){
                    bingxiang.push(obj);
                } else if(brandTitle.search(/洗衣机|干衣机|脱水机/) != -1){
                    xiyiji.push(obj);
                } else if(brandTitle.search(/热水器/) != -1){
                    reshuiqi.push(obj);
                } else if(brandTitle.search(/手机/) != -1){
                    shouji.push(obj);
                } else if(brandTitle.search(/相机/) != -1){
                    xiangji.push(obj);
                } else {
                    chuwei.push(obj);
                }
            }
            var arr = [dianshi,kongtiao,yingyin,bingxiang,xiyiji,reshuiqi,chuwei,shouji,xiangji]
            
            // console.log(arr);
            var brandCategories = [];
            var obj = {};
            for(let i = 0; i < brandTitles.length; i++) {
                obj.brandTitle = brandTitles[i];
                obj.brandNames = arr[i];
                brandCategories.push(obj); 
                obj = {};
            }
            // console.log("brandCategories",brandCategories);
            $('#jsbrand-category').html(template('tmpl-brand-category', {
                brandCategories: brandCategories
            }));
           
            // $('#jsbrand-title').on('tap','li',function(){
                
            //    var brandTitleId = $(this).data('brandtitleid');
            //    location.href = "http://58.218.199.45:14985/api/getbrand?brandtitleid="+brandTitleId;
 
            // })
        }
    });
})


// window.onload = function () {
//     $(function () {
//         var a, t, n;
//         a = {
//             api: baseUrl + "/api/getbrandtitle",
//             callback: function (a) {
//                 for (var t = a.result, 
//                          n = [/电视/, /空调/, /播放器|影院/, /冰箱/, /洗衣机|热水/, /手机/, /相机/], 
//                          e = $(".panel-body").children("ul"), 
//                          l = 0; 
//                          l < t.length; 
//                          l++) {
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