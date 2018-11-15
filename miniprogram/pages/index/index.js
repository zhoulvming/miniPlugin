var initData = 'this is first line\nthis is second line'
var extraLine = [];
var plugin = requirePlugin("hello-plugin");
var appid = 'wx4c3c0bf1a0f23d2c';
var secret = '0637b3925a8f46cabc0518b0bd83a4ba';
Page({
  data: {
    items: [],
    currentItem: 0
  },
  onLoad: function () {
    plugin.sayHello();
    var world = plugin.answer;
  },
  addItem: function () {
    this.data.items.push(this.data.currentItem++);
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem
    });
  },
  add: function (e) {
    var self = this;
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    //if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
    if (!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) {  
      console.log('000000')
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              success: function (res) {
                var objz = {};
                objz.avatarUrl = res.userInfo.avatarUrl;
                objz.nickName = res.userInfo.nickName;
                wx.setStorageSync('userInfo', objz);//存储userInfo
              }
            });
            var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + res.code + '&grant_type=authorization_code';
            wx.request({
              url: l,
              data: {},
              method: 'GET',
              success: function (res) {
                var obj = {};
                obj.openid = res.data.openid;
                obj.expires_in = Date.now() + res.data.expires_in;
                wx.setStorageSync('user', obj);//存储openid  
                console.log(obj);
                self.setData({
                  text: obj.openid
                });
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
  },
  remove: function (e) {
    console.log('remove method...')
    // if (extraLine.length > 0) {
    //   extraLine.pop()
    //   this.setData({
    //     text: initData + '\n' + extraLine.join('\n')
    //   })
    // }

    wx.login({
      success(res) {
        console.log(1111111111);
        console.log(res);
        if (res.code) {
          
          wx.getUserInfo({
            success: function (res) {
              console.log(22222);
              console.log(res);
            }
          });


        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })

  }
});