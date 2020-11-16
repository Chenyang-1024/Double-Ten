Page({
  data: {
    isLogin: false,
    UserAvatar: null
  },
  // 获取用户信息
  bindGetUserInfo (event) {
    console.log(event)
    this.setData({
      userInfo: event.detail.userInfo,
      UserAvatar: event.detail.userInfo.avatarUrl,
      isLogin: true
    })
  },
  // 更换头像
  setUserAvatar:function () {
    var _this = this;
    wx.chooseImage({
      count: 1,
      // 指定上传原图还是缩略图，默认两个都有
      sizeType: ['original', 'compressed'],
      // 指定来源是相机还是相册，默认两个都有
      sourceType: ['camera','album'],
      success:function (res) {
        _this.setData({
          UserAvatar: res.tempFilePaths
        })
      }
    })
  }
})