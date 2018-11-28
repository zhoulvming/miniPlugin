// plugin/pages/index-page.js
Page({
  data: {
    imgUrls: [
      '../images/pt002.jpg',
      '../images/pt001-detail.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    console.log('This is a plugin home page!');
  },
  method: {
    gotoList: function() {
      console.log('will goto ....')
    },
    changeIndicatorDots: function (e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay: function (e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange: function (e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange: function (e) {
      this.setData({
        duration: e.detail.value
      })
    }
  }
});