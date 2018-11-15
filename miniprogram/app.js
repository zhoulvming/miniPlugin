//app.js
App({
  data: {
    test: 'zlm'
  },
  globalData: {
    appid: '',
    secret: ''
  },

  onLaunch: function () {
    var that = this
    var user = wx.getStorageSync('user') || {}; 
    var userInfo = wx.getStorageSync('userInfo') || {}; 
  


  }
})