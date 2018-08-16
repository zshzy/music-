//这里先在page 外面定义一个变量用来接收对象
const myaudio = wx.getBackgroundAudioManager()

const animation = wx.createAnimation({
  duration:1000,
  timingFunction:'linear'
})

Page({
  /**
   * 页面的初始数据
   */
  data: {
    duration: '00:0',
    isplay:true,
    currentTime: '00:0',
    play:'../../images/play.png',
    stop:'../../images/stop.png',
    list:'../../images/list.png',
    hsz:'../../images/hsz.png',
    sc: '../../images/sc.png',
    shanchu:'../../images/shanchu.png',
    detail:'/pages/audio_detail/detail',
    index:0,
    item: { sname: '南方姑娘', auth: '赵雷', url:'../../images/bg.jpg',lrc:''},
    items: [
      { sname: '南方姑娘', auth: '赵雷', url: '../../images/nfgn.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C4000025oC6o2wuKEn.m4a?vkey=F04A24B05C724BF628EDCA53909B078C8BF1D9E930966F6E6F8669DDB61D98E17FFC0865267F3CA8983B373C2EEDC0828C9A3D46DA700E27&guid=62110850&uin=3109309193&fromtag=66' },
      { sname: 'The Wrong Things', auth: '王源', url: '../../images/bg.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?vkey=BCBA6A489642910ECC80432CCB53AB4183688FA5523E4CD21CBFC9ACC024D081EF86D2978F86D83325FAD3AA7733303658A3E44072C42D1E&guid=62110850&uin=3109309193&fromtag=66' },
      { sname: '魔鬼中的天使', auth: '简易宏', url: '../../images/mgzdts.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C4000025oC6o2wuKEn.m4a?vkey=F04A24B05C724BF628EDCA53909B078C8BF1D9E930966F6E6F8669DDB61D98E17FFC0865267F3CA8983B373C2EEDC0828C9A3D46DA700E27&guid=62110850&uin=3109309193&fromtag=66' },
      { sname: '最好', auth: '薛之谦', url: '../../images/zh.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?vkey=BCBA6A489642910ECC80432CCB53AB4183688FA5523E4CD21CBFC9ACC024D081EF86D2978F86D83325FAD3AA7733303658A3E44072C42D1E&guid=62110850&uin=3109309193&fromtag=66' },
      { sname: 'Three Pass', auth: '那吾克热', url: '../../images/sc.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C4000025oC6o2wuKEn.m4a?vkey=F04A24B05C724BF628EDCA53909B078C8BF1D9E930966F6E6F8669DDB61D98E17FFC0865267F3CA8983B373C2EEDC0828C9A3D46DA700E27&guid=62110850&uin=3109309193&fromtag=66' },
      { sname: '爱的故事上集', auth: '梦涵', url: '../../images/gs.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?vkey=BCBA6A489642910ECC80432CCB53AB4183688FA5523E4CD21CBFC9ACC024D081EF86D2978F86D83325FAD3AA7733303658A3E44072C42D1E&guid=62110850&uin=3109309193&fromtag=66' },
      { sname: '昨日青空', auth: '尤长靖', url: '../../images/zr.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C4000025oC6o2wuKEn.m4a?vkey=F04A24B05C724BF628EDCA53909B078C8BF1D9E930966F6E6F8669DDB61D98E17FFC0865267F3CA8983B373C2EEDC0828C9A3D46DA700E27&guid=62110850&uin=3109309193&fromtag=66' },
      { sname: '对不起', auth: '周杰伦', url: '../../images/dbq.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?vkey=BCBA6A489642910ECC80432CCB53AB4183688FA5523E4CD21CBFC9ACC024D081EF86D2978F86D83325FAD3AA7733303658A3E44072C42D1E&guid=62110850&uin=3109309193&fromtag=66' },
      { sname: '一直一起', auth: 'ETM女孩', url: '../../images/yq.jpg', lrc: '', src: 'http://dl.stream.qqmusic.qq.com/C4000025oC6o2wuKEn.m4a?vkey=F04A24B05C724BF628EDCA53909B078C8BF1D9E930966F6E6F8669DDB61D98E17FFC0865267F3CA8983B373C2EEDC0828C9A3D46DA700E27&guid=62110850&uin=3109309193&fromtag=66' }
    ],
    hidden:true,
    animationData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.isplay)
    var that = this
   // setTimeout(function () { console.log(myaudio.duration) }, 3000)
    myaudio.paused = true
    myaudio.onPlay(function () {
      myaudio.onTimeUpdate(function(){
      that.setData({
        duration: myaudio.duration,
        currentTime: myaudio.currentTime
        })
      })
    })
    //当我关闭音频的时候需要设置数据
    myaudio.onStop(() => {
      that.setData({
        isplay: true
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.clearStorage()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    //获取当前的locaslStorage 的数据，然后进行
    wx.getStorage({
      key: 'list',
      success: function (res) {
        console.log(res.data);
        for (let item in res.data) {
          that.setData({
            [item]: res.data[item]
          })
        }
      },
    })
    //这里需要判断一下音频是否是否播放过或者是自己暂停的 如果没有播放过那么paused 会出现undefind
    var o = myaudio.paused
    if(o!==undefined && !o){
      that.setData({
        isPlay: true
      })
    } else{
      that.setData({
        isPlay: false
      })
    }
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
  //这里是播放
  play:function () {
    myaudio.play()
    this.setData({
      isplay: false
    })

    //const that = this;
   
    //setTimeout(function () { console.log(myaudio.duration) }, 500);
  },

  //这里是停止
  stop:function(){
    myaudio.stop();
    this.setData({
      isplay: true
    })
  },
  //这里是暂停
  pause:function(){
    myaudio.pause();
    this.setData({
      isplay: true
    })
  },
  //显示列表
  showlist:function(){
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    // this.setData({
    //   hidden:false
    // })
  //设置弹出框
  this.setData({
    animationData:animation.export(),
    hidden: false
  })
  },
  hideModal:function(){
    this.setData({
      hidden: true
    })
  },
  //清空列表
  del:function(){
    var that = this;
    wx.showModal({
      content: '确定要清空播放列表？',
      success:function(res){
        if(res.confirm){
          //这里直接请求后台数据进行删除数据
          that.setData({
            items:{}
          });
        }else if(res.cancel){
          console.log('aaa');
          return;
        }
      }
    })
  },
  delone:function(event){
    //设置变量index
    let index = parseInt(event.target.dataset.index);
    //从数组中删除
    this.data.items.splice(index,1);
    this.setData({
      items: this.data.items
    });
  },
  setDuration: function (duration) {
    // 设置歌曲时长，和转换后的分钟数（显示时）
    let seconds = Math.floor(duration % 60) + '';
    if (seconds.length === 1) {
      // 个位数的话，前面加0
      seconds = '0' + seconds
    }
    this.setData({
      duration: duration,
      endTime: Math.floor(duration / 60) + ':' + seconds
    });
  },
  newPage(e){
    var that = this
    wx.setStorage({
      key: 'list',
      data: that.data, 
      success: function (res) {
      }
    })
    wx.navigateTo({
      url: this.data.detail
    })
  },
  playmusic: function (event){
    let index = event.target.dataset.index
    //console.log(event.target.dataset.index);
    myaudio.src = this.data.items[index].src
    this.setData({
      item:this.data.items[index],
      isplay: false,
      index:index
      }
    );
  }
})