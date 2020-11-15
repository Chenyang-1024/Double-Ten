Page({
  data: {
    isLogin: false
  },
  // 获取用户信息
    bindGetUserInfo(event) {
    console.log(event)
    this.setData({
      userInfo: event.detail.userInfo,
      isLogin: true
    })
  },
})