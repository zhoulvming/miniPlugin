// plugin/pages/list/index.js
Page({
  data: {},
  onLoad: function (options) {
    console.log(options);
    console.log('This is a list page!');
    

  },
  tap: function() {
    wx.request({
      url: 'https://api.apiopen.top/EmailSearch?number=1012002',
      success: function (res) {
        console.log(res.data.result)// 服务器回包信息
      }

    })
  }
});