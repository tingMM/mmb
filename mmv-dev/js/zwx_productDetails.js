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
        getProductCom(id) {
            return new Promise((resovle, reject) => {
                $.ajax({
                    url: "http://58.218.199.45:14985/api/getproductcom",
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
    }


    let productDetails = new ProductDetails(),
        id = getQueryString('productId');
    productDetails.getProduct(id)
        .then(res => {
            console.log(res);
            return productDetails.getProductCom(id)
        })
        .then(res => console.log(res))

})



function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}