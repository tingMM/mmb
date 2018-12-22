$(function () {
    class ProductDetails {
        constructor() {

        }
        getProduct(id) {
            return new Promise((resovle, reject) => {
                $.ajax({
                    url: "http://58.218.199.45:14985/api/getproduct",
                    data: {
                        productid: id,
                    },
                    success(res) {
                        resovle(res);
                    },
                    error(res) {
                        reject(res);
                    }
                })
            })
        }
        getCategoryById(id) {
            return new Promise((resovle, reject) => {
                $.ajax({
                    url: "http://58.218.199.45:14985/api/getcategorybyid",
                    data: {
                        categoryid: id,
                    },
                    success(res) {
                        resovle(res);
                    },
                    error(res) {
                        reject(res);
                    }
                })
            })
        }
        getProductCom(id) {
            return new Promise((resovle, reject) => {
                $.ajax({
                    url: "http://58.218.199.45:14985/api/getproductcom",
                    data: {
                        productid: id,
                    },
                    success(res) {
                        res.result.length > 0 ? resovle(res) : reject(res);
                    }
                })
            })
        }
        renderProduct(data) {
            let detail = `<p class="details-title">${data.productName}</p>
            <div class="details-image">
                ${data.productImg}
                <img src="images/sc.jpg" alt="" class="like">
            </div>
            <div class="details-nav">
                <nav>
                    <a href="">比价购买</a>
                    <a href="">产品参数</a>
                    <a href="">优选评论</a>
                </nav>
                <div class="jd-banner">
                    ${data.bjShop}
                </div>
                <div class="prompt">* 实际价格以各网站列出的实时售价为准，我们提供的价格可能有数小时至数日的延迟。</div>
            </div>`.trim();
            $(`.detail`).html(detail);
        }
        renderComments(list) {
            let comments = list.map(el =>
                `<li class="mui-table-view-cell">
                <div class="info">
                    <span class="author">${el.comName}</span> <span class="time">${el.comTime}</span>
                </div>
                <div class="likes">
                    <span class="stars">
                        <img src="images/star.svg" alt=""><img src="images/star.svg" alt=""><img src="images/star.svg"
                            alt=""><img src="images/star.svg" alt=""><img src="images/star.svg" alt="">
                    </span>
                    <span class="origin">${el.comFrom}</span>
                </div>
                <p class="content">${el.comContent}</p>
            </li>`).join('');
            $('.comments').html(comments);
        }
    }


    let productDetails = new ProductDetails(),
        productid = getQueryString('productId'),
        categoryid = getQueryString('categoryid'),
        position = getQueryString('position');
    productDetails.getCategoryById(categoryid)
        .then(res => {
            $('#navigation nav').html(`<a href="hyl_index.html">首页</a> &gt <a href="zwx_category.html">全部分类</a> &gt <a href="#">${res.result[0].category}</a>`)
            return productDetails.getProduct(productid);
        })
        .then(res => {
            console.log(res);
            productDetails.renderProduct(res.result[0]);
            return productDetails.getProductCom(productid);
        })
        .then(res => {
            productDetails.renderComments(res.result)
        })
        .catch(res => $('.comments').html(`<li class="mui-table-view-cell"><p class="content">暂无评论</p></li>`))
        .finally(() => {
            if (position) {
                console.log(2);
                
                $('.mui-scroll').css({
                    "transform": `translate3d(0px, -404px, 0px) translateZ(0px)`,
                    "transition-duration": `0ms`
                })
            }
        })

    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });

})



function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}