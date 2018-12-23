$(function(){
    /*1. nav从接口请求数据 http://mmb.ittun.com/api/getbaicaijiatitle
        1. ajax 
        2. 打印数据
        3. 调用模板
        4. 渲染模板
     */
    $.ajax({
        url: "http://58.218.199.45:14985/api/getbaicaijiatitle",
        success: function (data) {
            console.log(data);
            var title = data.result[0].title
            
            // console.log(data.result[0].title);

             //3. 调用模板
             var html = template('navTpl',data);
            //  console.log(html);
             //4. 渲染模板

             $('.baicaijia_nav .bcj_parent').html(html);
            //  $('a[name=0]').addClass(' active');
            //  console.log($('a[name="0"]'));
             $('a[name="0"]').addClass('mui-active');
            //  return title;
            
        }
    });
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
        
    /*2. product 商品列表
        1. 先渲染一遍模板  注册点击事件再发 ajax
        2. 打印数据
        3. 调用模板
        4. 渲染
     */
    // 先渲染一遍模板
    $.ajax({
        url: "http://58.218.199.45:14985/api/getbaicaijiaproduct",
        data: {titleid: 0},
        success: function (data) {
            // console.log(title);
            // console.log(data);
            
            //3. 调用模板
            var html = template('productTpl', data);
            // console.log(html);

            //4. 渲染模板
             $('.baicaijia_product .tab-content ul').html(html);    
             $('.baicaijia_product .tab-content ul li>a:first-child').text('');
            
            
        }
    });
    //注册点击事件
    $('.baicaijia_nav .bcj_parent').on('tap', 'a', function () {
    var title = $(this).attr('name');
    // console.log(title);
    //发送请求
    $.ajax({
        url: "http://58.218.199.45:14985/api/getbaicaijiaproduct",
        data: {titleid: title},
        success: function (data) {
            // console.log(title);
            // console.log(data);
            
            //3. 调用模板
            var html = template('productTpl', data);
            // console.log(html);

            //4. 渲染模板
             $('.baicaijia_product .tab-content ul').html(html);    
             $('.baicaijia_product .tab-content ul li>a:first-child').text('');
            
            
        }
    });
    });
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    })