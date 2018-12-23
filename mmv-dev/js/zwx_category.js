$(function () {
    class Category {
        constructor() {

        }
        splitArr(arr, len) {
            let arr_length = arr.length;
            let newArr = [];
            for (let i = 0; i < arr_length; i += len) {
                newArr.push(arr.slice(i, i + len));
            }
            return newArr;
        }
        getCategoryTitle() {
            return new Promise((resovle, reject) => {
                $.ajax({
                    url: "http://58.218.199.45:14985/api/getcategorytitle",
                    success(res) {
                        resovle(res.result);
                    },
                    error(res) {
                        reject(res);
                    }
                })
            })
        }

        getCategory(id) {
            return new Promise((resovle, reject) => {
                $.ajax({
                    url: "http://58.218.199.45:14985/api/getcategory",
                    data: {
                        titleid: id
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

    let categoryPage = new Category();
    categoryPage.getCategoryTitle()
        .then(res => {
            let titles = res.map((val, i) => `<li class="mui-table-view-cell mui-collapse">
                <a class="mui-navigate-right" href="#">${val.title}</a>
                <div class="mui-collapse-content">
                    <div class="mui-content">
                        <div id="Gallery${i}" class="mui-slider" style="margin-top:15px;">
                            <div class="mui-slider-group">
                            </div>
                            <div class="mui-slider-indicator">
                            </div>
                        </div>
                    </div>
                </div>
            </li>`).join('');
            $(`.titles`).html(titles);
            return Promise.all(res.map(e => categoryPage.getCategory(e.titleId)));
        })
        .then(res => {
            res.forEach((el, i) => {
                let categoryList = categoryPage.splitArr(el.result, 9);
                let categories = categoryList.map(val => `<div class="mui-slider-item">
                    <ul class="mui-table-view mui-grid-view mui-grid-9">
                        ${val.map(e => `<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                            <a href="zwx_productList.html?categoryid=${e.categoryId}">${e.category}</a>
                        </li>`).join('')}
                    </ul>
                </div>`).join('');
                let indicator = categoryList.map((e, i) => `<div class="mui-indicator ${i == 0 ? "mui-active" : ""}"></div>`).join('');
                $(`#Gallery${i} .mui-slider-group`).html(categories);
                $(`#Gallery${i} .mui-slider-indicator`).html(indicator);
                mui.ready(function () {
                    let slider = document.getElementById(`Gallery${i}`);
                    let group = slider.querySelector('.mui-slider-group');
                    let items = mui('.mui-slider-item', group);
                    let first = items[0].cloneNode(true);
                    first.classList.add('mui-slider-item-duplicate');
                    let last = items[items.length - 1].cloneNode(true);
                    last.classList.add('mui-slider-item-duplicate');
                    mui(slider).slider();
                });
            })
        });
    mui.init();

    $('#express').express();

})