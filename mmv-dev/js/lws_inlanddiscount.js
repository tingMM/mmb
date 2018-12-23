$(function(){
    // mui('.mui-scroll-wrapper').scroll({
    //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        
    // });

    $.ajax({
        url:"http://58.218.199.45:14985/api/getinlanddiscount",
        success: function(data) {
            console.log(data);
                var html = template('productListTpl', data);
                $('.productList ul').html(html);
        }
    })
})