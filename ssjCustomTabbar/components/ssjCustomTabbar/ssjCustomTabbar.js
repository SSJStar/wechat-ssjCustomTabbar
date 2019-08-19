// components/ssjCustomTabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabarData:{
        type: Object,
        value:{
          "list":[
            {
              "pagePath": "pages/mainPage/mainPage",
              "text": "首页",
              "iconPath": "../icon/icon_home.png",
              "selectedIconPath": "../icon/icon_home_HL.png"
            },
            {
              "pagePath": "pages/add/addPage",
              "text": "增加",
              "iconPath": "../icon/icon_release.png"
            },
            {
              "pagePath": "pages/index/index",
              "text": "日志",
              "iconPath": "../icon/icon_mine.png",
              "selectedIconPath": "../icon/icon_mine_HL.png"
            }
          ]
        },
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
