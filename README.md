# wechat-ssjCustomTabbar
微信小程序.自定义组件.自定义tabbar，参考了别人的代码，模仿着实现了一下
本人之前是做app开发的，所以对于tabbar自定义有一种执着。

<img src="https://github.com/SSJStar/wechat-ssjCustomTabbar/blob/master/show.gif" width="375"></img>  
>  
使用步骤：

1. 将ssjCustomTabbar/components下面的文件夹拉到miniprogram/components下，没有components文件夹就新建它

2. 在需要显示tabbar的页面json文件配置如下：

```
{
"usingComponents": {
"ssjCustomTabbar": "../../components/ssjCustomTabbar/ssjCustomTabbar"
},
}
```
```
”，记住：节点{}内每一行之间用逗号隔开，最后一行不需要逗号，否则报错
```
3. 在需要调用的xml文件加上：

>tabarData：表示绑定的数据源/必填

```
<ssjCustomTabbar tabarData="{{tabbarData}}"></ssjCustomTabbar>

```
4. 在app.json里加上需要跳转的pagePath:

>tabbar的点击事件，用navigator控件，当open-type = switchTab的时候，url的页面路径必须是在app.json的tabbar节点里声明过的，否则这个路径是跳转不了的
```
"tabBar": {
"list": [
{
"pagePath": "pages/mainPage/mainPage"
},
{
"pagePath": "pages/index/index"
}
],
"borderStyle": "white"
},
```

5. 在app.js里加上你定义的tabbar/json属性:

>此处的tabbar数据将直接影响到显示效果
```
this.globalData = {
tabbar: {
      "list": [{
          "pagePath": "/pages/mainPage/mainPage",
          "text": "首页",
          "iconPath": "../../icon/icon_home.png",
          "selectedIconPath": "../../icon/icon_home_HL.png"
        },
        {
          "pagePath": "/pages/add/addPage",
          "text": "新增",
          "special":true,
          "iconPath": "../../icon/icon_release.png"
        },
        {
          "pagePath": "/pages/index/index",
          "text": "日志",
          "iconPath": "../../icon/icon_mine.png",
          "selectedIconPath": "../../icon/icon_mine_HL.png"
        }
      ]
    }

}
```
6. 在app.js里加上tabarChange公共方法:

>此处的tabarChange方法在用到组件的页面js文件onLoad方法里调用，调用方法如下：  
onLoad: function (options) {  
var app = getApp()  
app.tabarChange()  
},
```
tabarChange: function() {
var tabbarData = this.globalData.tabbar
//每个页面初始化的时候 都可以调用这个方法，目的是为了初始化页面的tabbar的配置数据
//获得当前页
var pages = getCurrentPages()
let currentPage = pages[pages.length - 1]
//先将所有tabbar状态设置为未选中，然后当前页的状态设置为被选中
for (let index in tabbarData.list) {
var child = tabbarData.list[index]
child.selected = false
//因为currentPage.route默认pages前面少了一个'/'所以
var comparePath = currentPage.route
comparePath.indexOf('/') != 0 && (comparePath = '/' + comparePath)
if (child.pagePath == comparePath) {
child.selected = true
}
}
//将globalData的tabbar配置传入当前页面
currentPage.setData({
tabbarData: tabbarData
})
}
```
参考文章：https://www.jianshu.com/p/b19d7d0cb582
完毕！O(∩_∩)O~~
