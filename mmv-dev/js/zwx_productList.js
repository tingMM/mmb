$(function () {
    class ProdectList {
        constructor() {

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
        getProductList(id, page = 1) {
            return new Promise((resovle, reject) => {
                $.ajax({
                    url: "http://58.218.199.45:14985/api/getproductlist",
                    data: {
                        categoryid: id,
                        pageid: page
                    },
                    success(res) {
                        res.result.length > 0 ? resovle(res) : reject(res);
                    },
                    error(res) {
                        reject(res);
                    }
                })
            })
        }
        renderList(arr, append = false) {
            let list = arr.map(el =>
                `<li class="mui-table-view-cell mui-media ">
                <div class="mui-slider-right mui-disabled">
                    <a class="mui-btn mui-btn-blue btn-detail" data-categoryid="${el.categoryId}" data-productId="${el.productId}">评价</a>
                    <a class="mui-btn mui-btn-red btn-star">赞</a>
                </div>
                <a href="javascript:;" data-categoryid="${el.categoryId}" data-productId="${el.productId}" class="mui-navigate-right product mui-slider-handle">
                    <div class="pic">
                        ${el.productImg}
                    </div>
                    <div class="detail">
                        <p class="productName mui-ellipsis-2">${el.productName}</p>
                        <p class="productPrice">
                            ${el.productPrice}
                            <span class="stars">
                                <img src="images/star.svg" alt=""><img src="images/star.svg" alt=""><img src="images/star.svg" alt=""><img src="images/star.svg" alt=""><img src="images/star.svg" alt="">
                            </span>
                        </p>
                        <div class="other">
                            <span>${el.productCom}</span>
                            <span>${el.productQuote}</span>
                        </div>
                    </div>
                </a>
            </li>`).join('');
            if (append) {
                $('.product-list').append(list);
            } else {
                $('.product-list').html(list);
            }
        }
    }

    let productPage = new ProdectList();
    let id = getQueryString('categoryid'),
        page = 1;
    productPage.getCategoryById(id)
        .then(res => {
            $('#navigation nav').html(`<a href="hyl_index.html">首页</a> &gt <a href="zwx_category.html">全部分类</a> &gt <a href="#">${res.result[0].category}</a>`);
            return productPage.getProductList(id);
        })
        .then(res => productPage.renderList(res.result));

    mui.init({
        pullRefresh: {
            container: "#refreshContainer",
            down: {
                contentdown: "下拉可以刷新",
                contentover: "释放立即刷新",
                contentrefresh: "正在刷新...",
                callback() {
                    page = 1;
                    productPage.getProductList(id, page)
                        .then(res => productPage.renderList(res.result))
                        .catch(() => $('.product-list').html(`<li><span>该分类下暂时没有商品</span></li>`))
                        .finally(() => {
                            mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
                            mui('#refreshContainer').pullRefresh().refresh(true);
                        });
                }
            },
            up: {
                contentrefresh: "正在加载...",
                contentnomore: '没有更多数据了',
                callback() {
                    page++;
                    productPage.getProductList(id, page)
                        .then(res => {
                            productPage.renderList(res.result, true);
                            mui('#refreshContainer').pullRefresh().endPullupToRefresh();
                        })
                        .catch(() => mui('#refreshContainer').pullRefresh().endPullupToRefresh(true));
                }
            }
        }
    });
    $('.product-list').on('tap', '.product', function () {
        location = `zwx_productDetails.html?categoryid=${this.dataset.categoryid}&productId=${this.dataset.productid}`;
    })
    $('.product-list').on('tap', '.btn-detail', function (e) {
        location = `zwx_productDetails.html?categoryid=${this.dataset.categoryid}&productId=${this.dataset.productid}&position=title`;
        e.stopImmediatePropagation();
    })
    $('.product-list').on('tap', '.btn-star', function () {
        mui.toast('点赞成功', { duration: 'long', type: 'div' });
    })


});

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}