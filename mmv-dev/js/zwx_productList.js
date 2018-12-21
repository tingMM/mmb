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
                        resovle(res);
                    },
                    error(res) {
                        reject(res);
                    }
                })
            })
        }
    }

    let productPage = new ProdectList();
    let id = getQueryString('categoryid')
    productPage.getCategoryById(id)
        .then(res => {
            
            return productPage.getProductList(id)
        })
        .then(res => {
            console.log(res);
        })
})

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}