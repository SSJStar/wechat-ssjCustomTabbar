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
参考文章：https://www.jianshu.com/p/b19d7d0cb582
完毕！O(∩_∩)O~~
