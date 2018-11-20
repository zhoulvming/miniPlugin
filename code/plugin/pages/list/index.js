// plugin/pages/list/index.js
Page({
  data: {},
  onLoad: function () {
    console.log('This is a list page!');
    

  },
  tap: function() {
    wx.request({
      url: 'https://api.github.com/emojis',
      success: function (res) {
        console.log(res)// 服务器回包信息
      }

    })
  }
});