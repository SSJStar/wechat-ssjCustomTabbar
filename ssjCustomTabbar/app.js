//app.js
App({
  onLaunch: function() {
    //隐藏自带tabbar
    wx.hideTabBar()
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  tabarChange:function(){
    var tabbarData = this.globalData.tabbar
    //每个页面初始化的时候 都可以调用这个方法，目的是为了初始化页面的tabbar的配置数据
    //获得当前页
    var pages = getCurrentPages()
    let currentPage = pages[pages.length - 1]
    console.log('currentPage--:' + JSON.stringify(currentPage))
//先将所有tabbar状态设置为未选中，然后当前页的状态设置为被选中
    for (let index in tabbarData.list){
      var child = tabbarData.list[index]
      child.selected = false
      //因为currentPage.route默认pages前面少了一个'/'所以
      var comparePath =currentPage.route
      comparePath.indexOf('/') != 0 && (comparePath ='/' + comparePath)
      console.log('comparePath   :' + comparePath)
      if (child.pagePath == comparePath){
        child.selected = true
      }
      // console.log('line56 pagePath :' + JSON.stringify(child.pagePath))
      // child.pagePath = child.pagePath.substring(1, child.pagePath.length-1)
      // console.log('line58 pagePath :' + JSON.stringify(child.pagePath))
      // console.log('line51 child :' + JSON.stringify(child))
    }

    for (let i in tabbarData.list) {
      console.log('line54 i :'+i)
    }

    //将globalData的tabbar配置传入当前页面
    currentPage.setData({
      tabbarData: tabbarData
    })
  },
  globalData: {
    userInfo: null,
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
})