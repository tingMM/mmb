# MMBAPI 文档

## 一、首页

### 1.1、首页功能页面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/1-1.png)

想··![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/1-2.png)

### 1.2、首页上用到的请求的api说明

####  1.2.1、首页菜单栏api

| 地址             | http://58.218.199.45:14985/api/getindexmenu                       |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 主要用来获取首页上面菜单栏数据，大家在做的时候可以使用ajax请求这个地址获取json数据后展示到页面上 |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json对象                                                     |
| 返回数据格式样例 |                                                              |

```json
{
    "result": [{
        "indexmenuId": “菜单的id”,
        "name": "菜单的名称",
        "img": "菜单的图片",
        "titlehref": "菜单的链接地址"
            }]
}
```

####  1.2.2、首页的折扣列表中的数据api

| 地址             | http://58.218.199.45:14985/api/getmoneyctrl                       |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 用来获取折扣商品的列表信息，通过ajax获取到数据渲染到页面上   |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"productId": "商品id",		"productName": "商品名称",		"productPinkage": "商品价格",		"productFrom": "商品来源",		"productTime": "商品发布事件",		"productImgSm": "商品图片小图",		"productComCount": "商品评论"	}]} |

```json
{	"result": [{		"productId": "商品id",		"productName": "商品名称",		"productPinkage": "商品价格",		"productFrom": "商品来源",		"productTime": "商品发布事件",		"productImgSm": "商品图片小图",		"productComCount": "商品评论"	}]}
```



## 二、  比价搜索页面

###  2.1、分类页功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/2-1.png)

###  2.2、分类页api

####  2.2.1、分类标题api

| 地址             | http://58.218.199.45:14985/api/getcategorytitle                   |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 获取分类的标题信息（大家电，手机数码...）等8个数据然后渲染到分类标题上 |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json对象                                                     |
| 返回数据格式样例 | {    "result": [{        "title": “分类标题名称”,        "titleId": "分类标题id"    }]} |

```json
{    "result": [{        "title": “分类标题名称”,        "titleId": "分类标题id"    }]}
```



####  2.2.2、分类列表api

| 地址             | http://58.218.199.45:14985/api/getcategory                        |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据分类的标题获取标题对应的分类列表然后渲染到页面上         |
| 传入api的参数    | titleid: 分类标题的id  ( Number类型)                         |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{        "titleId": "分类标题id",        "category": "分类名称",        "categoryId": "分类id"	}]} |
|                  |                                                              |

```json
{	"result": [{        "titleId": "分类标题id",        "category": "分类名称",        "categoryId": "分类id"	}]}
```



###  2.3、商品列表功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/2-2.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/2-3.png)

###  2.4、商品列表api

####  2.4.1、根据分类id获取分类名称api

| 地址             | http://58.218.199.45:14985/api/getcategorybyid                    |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据分类的id获取分类的名称                                   |
| 传入api的参数    | categoryid: 分类的id  ( Number类型)                          |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"categoryId": "分类id",		"category": "分类名称",		"titleId": "分类标题id"	}]} |

 ```json
{	"result": [{		"categoryId": "分类id",		"category": "分类名称",		"titleId": "分类标题id"	}]}
 ```



####  2.4.2、商品列表api

| 地址             | http://58.218.199.45:14985/api/getproductlist                     |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据分类id获取该分类的商品列表并渲染到页面                   |
| 传入api的参数    | categoryid ： 分类id  ( Number类型)，  pageid :  页数id   ( Number类型) |
| 返回数据格式     | Json对象                                                     |
| 返回数据格式样例 | {    "pagesize": "每页大小",    "totalCount": "总条数"    "result": [{        "productId": "商品id",        "categoryId": "商品分类id",        "productListId": "商品列表id",        "productName": "商品名称",        "productImg": "商品图片",        "productPrice": "商品价格",        "productQuote": "商品报价",        "productCom": "商品评论数",        "brandName": "品牌名称",        "brandTitleId": "品牌标题id"    }]} |
|                  |                                                              |

```json
{    "pagesize": "每页大小",    "totalCount": "总条数"    "result": [{        "productId": "商品id",        "categoryId": "商品分类id",        "productListId": "商品列表id",        "productName": "商品名称",        "productImg": "商品图片",        "productPrice": "商品价格",        "productQuote": "商品报价",        "productCom": "商品评论数",        "brandName": "品牌名称",        "brandTitleId": "品牌标题id"    }]}
```



### 2.5、商品详情功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/2-4.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/2-5.png)



![img](file:////tmp/wps-yggdrasill/ksohtml/wps2ZlTKN.jpg)

![img](file:////tmp/wps-yggdrasill/ksohtml/wps8eTjn9.jpg)

###  2.6、商品详情api

####  2.6.1、获取商品详情api

| 地址             | http://58.218.199.45:14985/api/getproduct                         |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据商品id获取商品的详细信息然后渲染到页面上                 |
| 传入api的参数    | productid ： 商品id  ( Number类型)                           |
| 返回数据格式     | Json对象                                                     |
| 返回数据格式样例 | {	"result": [{				"productId": "商品id",		"productName": "商品名称",		"productImg": "商品图片",		"bjShop": "商品比价购买店铺",		"categoryId": "分类id"	}]} |
|                  |                                                              |

 ```json
{	"result": [{				"productId": "商品id",		"productName": "商品名称",		"productImg": "商品图片",		"bjShop": "商品比价购买店铺",		"categoryId": "分类id"	}]}
 ```



####  2.6.2、获取商品评论api

| 地址             | http://58.218.199.45:14985/api/getproductcom                      |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据商品id获取该商品的评论信息然后渲染到页面上               |
| 传入api的参数    | productid ： 商品id   ( Number类型)                          |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"comId": "商品评论id",		"comName": "商品评论人名",		"comTime": "商品评论时间",		"comFrom": "商品评论来源",		"comContent": "商品评论内容",		"productId": "商品id",		"categoryId": "分类id"	}]} |
|                  |                                                              |

 ```json
{	"result": [{		"comId": "商品评论id",		"comName": "商品评论人名",		"comTime": "商品评论时间",		"comFrom": "商品评论来源",		"comContent": "商品评论内容",		"productId": "商品id",		"categoryId": "分类id"	}]}
 ```





## 三、  省钱控页面

###  3.1、功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/3-1.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/3-2.png)

###  3.2、省钱控商品列表api

| 地址             | http://58.218.199.45:14985/api/getmoneyctrl                       |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据页数用来获取省钱控的每一页的商品列表信息                 |
| 传入api的参数    | pageid : 页数id   (Number) 不传默认返回第一页数据            |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {    "pagesize": "每页数据大小",    "totalCount": "商品总条数",    "result": [{        "productId": "商品id",        "productName": "商品名称",        "productPinkage": "商品价格",        "productFrom": "商品来源",        "productImgSm": "商品的图片小图",        "productComCount": "商品评论数量"    }]} |
|                  | 分页 实现 ： 求出总页数 =  总条数 / 每页的大小 140 / 10 = 14实现上一页 下一页的功能： 首先要获取当前页面的页码数根据url的参数获取值 getUrlParame(“pageid”) == 1当前是第一页的话 上一页 是 0  下一页 是第2页下拉选择框 改变的时候 onchange事件 获取下拉框的值 当前下拉框的元素this.value |

```json
{    "pagesize": "每页数据大小",    "totalCount": "商品总条数",    "result": [{        "productId": "商品id",        "productName": "商品名称",        "productPinkage": "商品价格",        "productFrom": "商品来源",        "productImgSm": "商品的图片小图",        "productComCount": "商品评论数量"    }]}
```





###  3.3、省钱控商品详情页功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/3-3.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/3-4.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/3-5.png)

###  3.4、省钱控商品详情api



| 地址             | http://58.218.199.45:14985/api/getmoneyctrlproduct                |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据商品id获取国内折扣商品的详细信息 并渲染到页面            |
| 传入api的参数    | productid : 商品id (Number)                                  |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {    "result": [{        "productId": "商品id",        "productName": "商品名称",        "productPinkage": "商品价格",        "productFrom": "商品来源",        "productTime": "商品发布时间",        "productTips": "商品发布小编",        "productInfo": "商品的描述信息1",        "productInfo1": "商品的描述信息2",        "productImgSm": "商品的图片小图",        "productImgLg": "商品的图片大图",        "productCity": "商品的库存城市",        "productInfo2": "商品的描述信息3",        "productImg2": "商品第2张图片",        "productImg3": "商品第3张图片",        "productComment": "",        "productComCount": "商品评论数量"    }]} |
|                  |                                                              |

 ```json
{    "result": [{        "productId": "商品id",        "productName": "商品名称",        "productPinkage": "商品价格",        "productFrom": "商品来源",        "productTime": "商品发布时间",        "productTips": "商品发布小编",        "productInfo": "商品的描述信息1",        "productInfo1": "商品的描述信息2",        "productImgSm": "商品的图片小图",        "productImgLg": "商品的图片大图",        "productCity": "商品的库存城市",        "productInfo2": "商品的描述信息3",        "productImg2": "商品第2张图片",        "productImg3": "商品第3张图片",        "productComment": "",        "productComCount": "商品评论数量"    }]}
 ```







## 四、  国内折扣页面

###  4.1、国内折扣列表功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/4-1.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/4-2.png)

### 4.2、国内折扣商品列表api



| 地址             | http://58.218.199.45:14985/api/getinlanddiscount                  |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 用来国内折扣商品列表数据 并渲染到页面上                      |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {    "result": [{        "productId":  "商品id",        "productName": "商品名称",        "productPrice": "商品价格",        "productFrom": "商品来源",        "productTime": "商品发布时间",               "productImg": "商品的图片",    }]} |
|                  |                                                              |

 ```json
{    "result": [{        "productId":  "商品id",        "productName": "商品名称",        "productPrice": "商品价格",        "productFrom": "商品来源",        "productTime": "商品发布时间",               "productImg": "商品的图片",    }]}
 ```



### 4.3、国内折扣商品详情页功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/4-3.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/4-4.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/4-5.png)

###  4.4、国内折扣商品详情api



| 地址             | http://58.218.199.45:14985/api/getdiscountproduct                 |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据商品id获取国内折扣商品的详细信息 并渲染到页面            |
| 传入api的参数    | productid : 商品id (Number)                                  |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {    "result": [{        "productId": "商品id",        "productName": "商品名称",        "productPinkage": "商品价格",        "productFrom": "商品来源",        "productTime": "商品发布时间",        "productTips": "商品发布小编",        "productInfo": "商品的描述信息1",        "productInfo1": "商品的描述信息2",        "productImgSm": "商品的图片小图",        "productImgLg": "商品的图片大图",        "productCity": "商品的库存城市",        "productInfo2": "商品的描述信息3",        "productImg2": "商品第2张图片",        "productImg3": "商品第3张图片",        "productComment": "",        "productComCount": "商品评论数量"    }]} |
|                  |                                                              |

 ```json
{    "result": [{        "productId": "商品id",        "productName": "商品名称",        "productPinkage": "商品价格",        "productFrom": "商品来源",        "productTime": "商品发布时间",        "productTips": "商品发布小编",        "productInfo": "商品的描述信息1",        "productInfo1": "商品的描述信息2",        "productImgSm": "商品的图片小图",        "productImgLg": "商品的图片大图",        "productCity": "商品的库存城市",        "productInfo2": "商品的描述信息3",        "productImg2": "商品第2张图片",        "productImg3": "商品第3张图片",        "productComment": "",        "productComCount": "商品评论数量"    }]}
 ```





## 五、  白菜价页面

### 5.1、白菜价列表功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/5-1.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/5-2.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/5-3.png)

###  5.2  、白菜价列表api

####  5.2.1、白菜价标题api

| 地址             | http://58.218.199.45:14985/api/getbaicaijiatitle                  |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 主要用来获取白菜价页面的tab栏标题数据并渲染到标题            |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {    "result": [{        "titleId": "标题id",        "title": "标题内容"    }]} |
|                  |                                                              |

```json
 {    "result": [{        "titleId": "标题id",        "title": "标题内容"    }]}
```



####  5.2.2、白菜价商品列表api

| 地址             | http://58.218.199.45:14985/api/getbaicaijiaproduct                |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据标题id获取该标题对应的商品列表然后渲染到页面             |
| 传入api的参数    | titleid : 标题id (Number)                                    |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"titleId": "标题id",		"productId": "商品id",		"productName": "商品名称",		"productPrice": "商品价格",		"productImg": "商品图片",		"productCoupon": "点击领取优惠券",		"productHref": "下单链接",		"productCouponRemain": "已领数量"	}]} |
|                  |                                                              |





## 六、  海淘折扣页面页面（同省钱控页面）

###  6.1、功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/6-1.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/6-2.png)

###  6.2  、省钱控商品列表api

| 地址             | http://58.218.199.45:14985/api/getmoneyctrl                       |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据页数用来获取省钱控的每一页的商品列表信息                 |
| 传入api的参数    | pageid : 页数id   (Number) 不传默认返回第一页数据            |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {    "pagesize": "每页数据大小",    "totalCount": "商品总条数",    "result": [{        "productId": "商品id",        "productName": "商品名称",        "productPinkage": "商品价格",        "productFrom": "商品来源",        "productImgSm": "商品的图片小图",        "productComCount": "商品评论数量"    }]} |
|                  |                                                              |

 ```json
{    "pagesize": "每页数据大小",    "totalCount": "商品总条数",    "result": [{        "productId": "商品id",        "productName": "商品名称",        "productPinkage": "商品价格",        "productFrom": "商品来源",        "productImgSm": "商品的图片小图",        "productComCount": "商品评论数量"    }]}
 ```



## 七、  优惠券页面

###  7.1、功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/7-1.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/7-2.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/7-3.png)

###  7. 2  、优惠券api

####  7.2.1、优惠券标题api

| 地址             | http://58.218.199.45:14985/api/getcoupon                          |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 用来获取优惠券标题信息 并渲染到页面                          |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"couponId": "优惠券标题id",		"couponImg": "优惠券标题图片",		"couponLink": "优惠券列表链接",		"couponTitle": "优惠券标题名称"	}]} |
|                  |                                                              |

```json
{	"result": [{		"couponId": "优惠券标题id",		"couponImg": "优惠券标题图片",		"couponLink": "优惠券列表链接",		"couponTitle": "优惠券标题名称"	}]}
```



####  7.2.2、优惠券列表api



| 地址             | http://58.218.199.45:14985/api/getcouponproduct                   |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据优惠券标题id获取该标题对应的列表                         |
| 传入api的参数    | couponid：优惠券标题id  (Number)                             |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"couponProductId": "优惠券商品id",		"couponId": "优惠券标题id",		"couponProductTime": "优惠券商品有效期",		"couponProductImg": "优惠券商品图片",		"couponProductName": "优惠券商品名称",		"couponProductPrice": "优惠券商品价格"	}]} |
|                  |                                                              |

```json
{	"result": [{		"couponProductId": "优惠券商品id",		"couponId": "优惠券标题id",		"couponProductTime": "优惠券商品有效期",		"couponProductImg": "优惠券商品图片",		"couponProductName": "优惠券商品名称",		"couponProductPrice": "优惠券商品价格"	}]}
```



## 八、  凑单品页面页面

###  8.1、功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/8-1.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/8-2.png)

###  8.2  、凑单品api

####  8.2.1、凑单品店铺api



| 地址             | http://58.218.199.45:14985/api/getgsshop                          |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 用来获取凑单品的店铺的信息 并渲染到店铺的下拉列表            |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"shopId": "店铺id",		"shopName": "店铺名称"	}]} |
|                  |                                                              |

```json
{	"result": [{		"shopId": "店铺id",		"shopName": "店铺名称"	}]}
```



####  8.2.2、凑单品区域api



| 地址             | http://58.218.199.45:14985/api/getgsshoparea                      |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 用来获取凑单品的区域的信息 并渲染到区域的下拉列表            |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"areaId": "区域id",		"areaName": "区域名称"	}]} |
|                  |                                                              |

```json
 {	"result": [{		"areaId": "区域id",		"areaName": "区域名称"	}]
```



####  8.2.3、凑单品商品列表api



| 地址             | http://58.218.199.45:14985/api/getgsproduct                       |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据店铺的id和区域的id获取该店铺该区域的商品列表信息         |
| 传入api的参数    | shopid : 店铺id  (Number) areaid : 区域id  (Number)          |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"productId": "商品id",		"areaId": "区域id",		"shopId": "店铺id",		"productPrice": "商品价格",		"productImg": "商品图片",		"productName": "商品名称"	}]} |
|                  |                                                              |

 ```json
{	"result": [{		"productId": "商品id",		"areaId": "区域id",		"shopId": "店铺id",		"productPrice": "商品价格",		"productImg": "商品图片",		"productName": "商品名称"	}]}
 ```





## 九、  商城导航页面

###  9.1、商城导航功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/9-1.png)

###  9.2  、商城导航api

| 地址             | http://58.218.199.45:14985/api/getsitenav                         |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 用来获取所有商城导航的列表信息 并渲染到页面上                |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {		"result": [{			"navId": "导航id",			"navImg": "导航图片",			"navTitle": "导航名称",			"navHref": "导航链接	"		}]} |
|                  |                                                              |

 ```json
{		"result": [{			"navId": "导航id",			"navImg": "导航图片",			"navTitle": "导航名称",			"navHref": "导航链接	"		}]}
 ```





## 十、  品牌大全页面

###  10.1、功能界面

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/a-1.png)



![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/a-2.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/a-3.png)

![](https://raw.githubusercontent.com/Yggdrasill-7C9/mmb/master/docs/images/a-4.png)

###  10.2  、品牌大全api

####  10.2.1、品牌大全标题api



| 地址             | http://58.218.199.45:14985/api/getbrandtitle                      |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 用来获取品牌大全的标题信息 并渲染到列表                      |
| 传入api的参数    | 无                                                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {		"result": [{			"brandTitleId": "品牌标题id",			"brandTitle": "品牌标题名称",			"categoryId": "分类id"		}]} |
|                  |                                                              |

```json
{		"result": [{			"brandTitleId": "品牌标题id",			"brandTitle": "品牌标题名称",			"categoryId": "分类id"		}]}
```



####  10.2.2、品牌标题对应的十大品牌api



| 地址             | http://58.218.199.45:14985/api/getbrand                           |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据品牌的标题id获取该品牌标题下的十大品牌列表 并渲染到十大品牌列表里面 |
| 传入api的参数    | brandtitleid：品牌标题id  (Number)                           |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {		"result": [{			"brandId": "品牌id",			"brandTitleId": "品牌标题id",			"brandName": "品牌名称",			"brandInfo": "品牌全网销售量",			"categoryId": "分类id"		}]} |
|                  |                                                              |

 ```json
{
    "result": [
	{
		"_id": "580ddb976b7bf3ad69711a0f",
		"brandId": 0,
		"brandTitleId": 0,
		"brandName": "三星平板电视",
		"brandInfo": "30天全网销售：242408件",
		"categoryId": 0
	}
}
 ```





#### 10.2.3、品牌标题对应的十大品牌的销量排行商品列表api



| 地址             | http://58.218.199.45:14985/api/getbrandproductlist                |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据品牌的标题id获取该品牌标题下的十大品牌的销量排行列表商品 并渲染到该品牌的销量排行商品列表里面 |
| 传入api的参数    | brandtitleid：品牌标题id  (Number) pagesize ：展示的数据量 默认为4个 (Number) |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {    "pagesize": "每页大小",    "totalCount": "总条数"    "result": [{        "productId": "商品id",        "categoryId": "商品分类id",        "productListId": "商品列表id",        "productName": "商品名称",        "productImg": "商品图片",        "productPrice": "商品价格",        "productQuote": "商品报价",        "productCom": "商品评论数",        "brandName": "品牌名称",        "brandTitleId": "品牌标题id",        "brandId": "品牌id"    }]} |
|                  |                                                              |

 ```json
{
	"pagesize": 10,
	"totalCount": 1529,
	"result": [
	{
		"_id": "580df5196b7bf3ad69712303",
		"productId": 1,
		"categoryId": 0,
		"productListId": 1,
		"productName": "乐视TV(Letv) 超3 X55 55英寸智能LED液晶 超级电视 4K超清电视",
		"productImg": "<img src=\"http://pro.zuyushop.com:8015/ProPic/201510/Thumb/Thumb_201510001104382491.jpg\" alt=\"乐视TV(Letv) 超3 X55 55英寸智能LED液晶 超级电视 4K超清电视\" width=\"100\" height=\"100\">",
		"productPrice": "￥3266.00",
		"productQuote": "报价(6)",
		"productCom": "评论(3522)",
		"brandName": "乐视",
		"brandTitleId": 0,
		"brandId": 439
	}
}
 ```





#### 10.2.4、销量排行商品的评论api



| 地址             | http://58.218.199.45:14985/api/getproductcom                      |
| ---------------- | ------------------------------------------------------------ |
| 作用描述         | 根据商品id获取该商品的评论信息然后渲染到页面上               |
| 传入api的参数    | productid ： 商品id   ( Number类型)                          |
| 返回数据格式     | Json                                                         |
| 返回数据格式样例 | {	"result": [{		"comId": "商品评论id",		"comName": "商品评论人名",		"comTime": "商品评论时间",		"comFrom": "商品评论来源",		"comContent": "商品评论内容",		"productId": "商品id",		"categoryId": "分类id"	}]} |
|                  |                                                              |

```json
{
	"result": [
	{
	"_id": "5807279610fa773b5d6d923f",
	"comId": 0,
	"comName": "b***r",
	"comTime": "2016/10/1",
	"comFrom": "购买自：京东商城",
	"comContent": "使用了一周整体不错，主要是为了看纪录片和足球。装在窗户上有种大鱼缸的感觉哈！清晰度不错色彩也可以，应该说对得起2200的价格！还送了五年乐视会员，看英超所有比赛都free，但乐观乐视内容这块还不太丰富，应为家里也有百事通bestv和小米盒子，比较了下，电影百事通最好，纪录片小米最好，只有体育这块乐视比那两家好，还要多努力啊！电视本身有个不足，音响太差，太山寨了！而且不支持3.5mm接口或红白莲音频输出，害得我折腾半天，必须买光纤音频线",
	"productId": 0,
	"categoryId": 0
	},
 }
```
