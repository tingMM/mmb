$(function(){
    // 1.给导航栏三个页面注册点击事件
    // 点击对应选项出现对应的下滑列表

    // 获取所有的下拉列表
    var ulList = $('.nav-content');
    // 获取所有的三角形
    var trigonList = $('.trigon');
    // console.log(ulList);
    // 获取所有的导航栏的a
    var aList = $('.nav-title>a');
    console.log(aList);
    
    
    $('.nav-title>a').on('tap',function(){
        // 获取当前点击的选项
        var index = $(this).data('title-num');
        // console.log(index);
        // 将当前点击选项的下拉列表显示,其他隐藏
        ulList.eq(index).toggle().siblings().hide();
        // 将当前点击三角形标签旋转180倒过来 其他的不变
        trigonList.eq(index).toggleClass('icon-active').parent().siblings().children().removeClass('icon-active');

    })

    // 2.获取凑单品的店铺的信息 并渲染到店铺的下拉列表
    $.ajax({
        url: 'http://58.218.199.45:14985/api/getgsshop',
        success: function(data){
            console.log(data);
            var html = template('shopTpl',data);
            // console.log(html); 
            $('.shop').html(html);

            // 给第一个li右边添加一个 正确 符号
            $('.shop').children().eq(0).children().addClass('fa fa-check');
            

            // 给店铺的下拉列表添加点击事件
            $('.shop li').on('tap',function(){
                // 获取到点击的id
                var shopId = $(this).data('shop-id');
                // 获取当前点击的店铺名称
                var shopName = $(this).data('shop-name');
                // console.log(shopId);
                // console.log(shopName);
                 
                // 点击完要将导航上的店铺名称修改为当前点击的店铺名称 
                $(aList).eq(0).children('span').text(shopName);
                // 把倒三角重新旋转180度回来
                trigonList.eq(0).toggleClass('icon-active');
                // 并且把导航隐藏
                ulList.eq(0).toggle();

                // 将选中的数据重新渲染到页面上
                getProductInfo(shopId,0);

                // 把右边的 正确符号位置修改为当前选中的店铺
                $('.shop').children().eq(shopId).children().addClass('fa fa-check').parent().siblings().children().removeClass('fa fa-check');
            })
        }
    })

    // 3.获取凑单品的地区的信息 并渲染到店铺的下拉列表
    $.ajax({
        url: 'http://58.218.199.45:14985/api/getgsshoparea',
        success: function(data){
            console.log(data);
            var html = template('areaTpl',data);
            // console.log(html); 
            $('.area').html(html);

            // 给第一个li右边添加一个 正确 符号
            $('.area').children().eq(0).children().addClass('fa fa-check');
            

             // 给地区的下拉列表添加点击事件
             $('.area li').on('tap',function(){
                // 获取到点击的id
                var areaId = $(this).data('area-id');
                // 获取当前点击的店铺名称
                var areaName = $(this).data('area-name').substr(0,2);
                // 截取 "华北（北京、山西等）" 字符串中华北两个字 之后再赋值
                
                console.log(areaId);
                console.log(areaName);
                 
                // 点击完要将导航上的地区名称修改为当前点击的地区名称 
                $(aList).eq(1).children('span').text(areaName);
                // 把倒三角重新旋转180度回来
                trigonList.eq(1).toggleClass('icon-active');
                // 并且把导航隐藏
                ulList.eq(1).toggle();

                // 将选中的数据重新渲染到页面上
                getProductInfo(0,areaId);

                // 把右边的 正确符号位置修改为当前选中的地区
                $('.area').children().eq(areaId).children().addClass('fa fa-check').parent().siblings().children().removeClass('fa fa-check');
            })
        }
    })

    // 4.获取产品列表的信息 并渲染到页面中  封装成一个函数
    function getProductInfo (shopid,areaid){
        $.ajax({
            url: 'http://58.218.199.45:14985/api/getgsproduct',
            data: { shopid : shopid , areaid : areaid },
            success: function(data) {
                console.log(data);
                var html = template('productTpl',data);
                // 渲染到页面上
                $('.product-info').html(html);
                
            }
        }) 
    }

    // 一进来立即调用函数 默认传入1 1 
    getProductInfo(0,0);
    
})