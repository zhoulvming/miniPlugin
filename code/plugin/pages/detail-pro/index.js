// pages/detail-pro/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details_content: "凭券可到店兑换1份炭烤鸡腿帕尼尼，仅限1次兑换。\n\n1.使用有效期：自购买日起14天内使用有效，仅限6:00~9:00使用。\n2.这里是使用规则2说明部分"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  gotoGroup: function() {
    wx.navigateTo({
      url: '../detail-grp/index',
    })
  }



})