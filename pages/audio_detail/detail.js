const myaudio = wx.getBackgroundAudioManager()
const animation = wx.createAnimation({
  duration: 1000,
  timingFunction: 'linear'
})
Page({
  /**
   * 页面的初始数据
   */
  data: {
      icon:{
        like:'../../images/like.png',
        love:'../../images/love.png',
        down:'../../images/down.png',
        comment:'../../images/comment.png',
        sett:'../../images/sett.png',
        start_one: '../../images/start_one.png',
        stop_one: '../../images/stop_one.png',
        prev_one: '../../images/prev_one.png',
        next_one: '../../images/next_one.png',
        list_one: '../../images/list_one.png',
        xh_one:'../../images/xh_one.png',
        play: '../../images/play.png',
        stop: '../../images/stop.png',
        list: '../../images/list.png',
        hsz: '../../images/hsz.png',
        sc: '../../images/sc.png',
        shanchu: '../../images/shanchu.png',
        detail: '/pages/audio_detail/detail'
      },
        aa:'',
        index:0,
        comment: '/pages/comment/comment',
        islike: true,
        duration: '00:0',
        currentTime: '00:0',
        slider:'',
        isplay: true,
        zt:1,
        bgplay:'../../images/player_disk_cover.scale-200.png',
        changtou:'../../images/player_needle.scale-200.png',                   animationa: {},
        item: { },
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
        hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.getStorage({
      key: 'list',
      success: function (res) {
        res.data['duration'] = that.formatTime(res.data['duration'])
        res.data['currentTime'] = that.formatTime(res.data['currentTime'])
        for (let item in res.data) {
          that.setData({
            [item]: res.data[item]
          })
        }
      }
    })
    //继续将时间进行
      this.getCurrentTime()
    //在播放的时候直接进行获取这个更新的时间
    myaudio.onPlay(()=>{
      this.getCurrentTime()
    })
    myaudio.onStop(()=>{
      that.setData({
        isplay:true
      })
    })
    // myaudio.onEnded(()=>{
    //   //判断循环的状态 在列表里面判断状态，并且根据播放模式进行播放内容
    //   this.playBGM()
    // })
   // console.log(this.data)
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
    //在这里我需要将当前的播放器的状态放到localStorage 中，然后在前面的页面获取数据，然后进行调整我的数据
    var that = this
    wx.setStorage({
      key: 'list',
      data: that.data,
      success:function(e){
        console.log(e);
      }
    })
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
  //播放音乐，当音乐是暂停的时候直接playMusic 
  playMusic(){
    myaudio.play()
      this.setData({
        isplay: false
      })
  },
  //暂停音乐，当音乐是播放的时候直接playMusic 
  stopMusic:function(){
    myaudio.pause()
      this.setData({
        isplay: true
      })
  },
  //获取当前的时间 并对时间进行格式化
  getCurrentTime:function(){
    myaudio.onTimeUpdate(() => {
            //计算百分比
      let slider = parseInt((myaudio.currentTime / myaudio.duration)*100)
      //console.log(myaudio.duration);
      let current = this.formatTime(parseInt(myaudio.currentTime))
      let duration = this.formatTime(parseInt(myaudio.duration))
      this.setData({
        currentTime: current,
        duration: duration,
        slider: slider
      })
      //这里可能还有点小BUG 
      if(current==duration){
        this.playBGM()
      }
    })
},
//格式化时间
  formatTime: function (value) {
    var sec = value; //秒
    var min = 0;     //分
    var hour = 0;     //小时
//当秒数大于60的时候 需要有分钟数 当分钟数大于60 的时候需要有小时
    if(value>=60){
      sec = parseInt(value%60)
      min = parseInt(value/60)
      //console.log(min);
      if(min>=60){
        min = parseInt(min/60)
        hour = parseInt(min%60)
      }
    }
    var result = ""
    if(sec <= 9){
      result = "0:0"+parseInt(sec)
    } else if(sec > 9 && sec <= 59){
      result = "0:"+parseInt(sec)
    } else {
      result = "" + parseInt(sec)
    }
    if(min>0){
      var m = parseInt(min)
      if (sec <= 9){
        result = m+":0"+parseInt(sec)
      } else if (sec > 9 && sec <= 59){
        result = m+":"+parseInt(sec)
      } else {
        result = m+parseInt(sec)
      }
      if (hour > 0) {
        result = "" + parseInt(hour) + ":" + result;
      }
    }
    return result;
   },
   //收藏 直接请求后台的数据 和后台进行交互
   like:function(){
     if(this.data.islike){
       this.setData({
         islike:false
       })
     }else{
       this.setData({
         islike: true
       })
     }
   },
   //跳转到评论区
   newPage:function(e){
     wx.navigateTo({
       url: this.data.comment,
     })
   },
   //计算进度
   //上一首   合理来算应该是直接去后台取数据的
  prev_one:function(){
    
    this.playBGM('prev_one')
   },
   //下一首
   next_one:function(){

     this.playBGM('next_one')
   },
   //背景音乐播放器
  playBGM:function(change='') {

    let zt = this.data.zt
    var index =this.data.index
    //当点击是下一首的时候进行这个判断
     switch (zt) {
      //列表循环
      case 1:
         if (change == 'prev_one'){
          index = this.music_prev()
         }else{
           index = this.music_next()
         }
        break
      //随机播放 
      case 2: 
         index = this.music_random()
      break    
      //单曲循环
      case 3: 
        if (change == 'next_one') {
          index = this.music_next()
        }
        if (change == 'prev_one') {
           index = this.music_prev()
         }
         index = index 
         break
         //顺序循环
      case 4:
         if (change == 'prev_one') {
           index = this.music_prev()
         }else{
           index = this.music_next()
         }
         break
       default: console.log('列表循环');
    }
    var that = this
    //通过BackgroundAudio 进行设置
    wx.playBackgroundAudio({
      dataUrl: that.data.items[index].src,
      title: that.data.items[index].sname,
      coverImgUrl: that.data.items[index].url,
      complete: () => {
        that.getCurrentTime()
        that.setData({
          isPlay: false,
          index: parseInt(index),
          playing: that.data.list[index],
          item:that.data.items[index]
        })
      }
    })
    //wx.getBackgroundAudioManager().seek(275)
  },
  //拖拽百分比
  slideChange:function(e){
    //通过value值 并且通过当前的最后的时间计算出需要跳转的时间
    //1、获取总时间
    let duration = myaudio.duration
    //2、获取value 值 也就是百分比
    let value = e.detail.value
    //3、计算需要跳转的位置
    let seek = parseInt(duration * value / 100)
    //4、判断是否有效的歌曲 如果有效的话那么直接跳转并且进行播放
    if ( myaudio.src!='undefined'&& myaudio.src!=''){
    //4、移动到位置直接进行播放
      myaudio.play()
     //5、直接跳转到你的位置
      myaudio.seek(seek)
    //设置播放器的状态
    this.setData({
      isplay:false
    })
    }
  },
//判断状态进行播放
//下一首
music_next:function(){
  var index = this.data.index + 1
 
  var length = this.data.items.length
  if (index == length) {
    index = 0
  }
  //删除数组中得内容，并且添加新得内容进入到数组
  this.setData({
    index: index,
    item: this.data.items[index]
  })
  return index
},
//上一首
music_prev:function(){
  var index = this.data.index
  var length = this.data.items.length
  if (index == 0) {
    index = length - 1
  } else {
    index = index - 1
  }
  //删除数组中得内容，并且添加新得内容进入到数组
  this.setData({
    index: index,
    item: this.data.items[index]
  })
  return index
},
//随机播放
music_random:function(){
  //1、获取当前的index   
  var index = this.data.index
  var length = this.data.items.length
  //创建新的数组
  var arr = new Array(length)
  for (var i = 0; i < length; i++) {
    arr[i] = i
  }
  //删除数组中我们当前播放的index
  arr.splice(index, 1)
  index = Math.floor(Math.random() * arr.length)
  this.setData({
    index: index,
    item: this.data.items[index]
  })
  return index
},
qiehuan:function(){
  //获取当前的状态码
  var zt = this.data.zt
  var xh_one = this.data.icon.xh_one
  zt++
  if(zt>4){
    zt=1
  }
  switch(zt){
    //列表播放
    case 1:
      xh_one = '../../images/xh_one.png'
    break
    //随机
    case 2:
      xh_one = '../../images/sj_one.png'
      break
      //单曲
    case 3:
      xh_one = '../../images/dq_one.png'
      //顺序
      break
    case 4:
      xh_one = '../../images/sj_one.png'
      break

  }
  var xh_two = 'icon.xh_one'
  this.setData({
    zt: zt,
    [xh_two]: xh_one
  })
},
  showlist: function () {
    //设置弹出框
    this.setData({
      animationData: animation.export(),
      hidden: false
    })
  },
  hideModal: function () {
    this.setData({
      hidden: true
    })
  },
  //清空列表
  del: function () {
    var that = this;
    wx.showModal({
      content: '确定要清空播放列表？',
      success: function (res) {
        if (res.confirm) {
          //这里直接请求后台数据进行删除数据
          that.setData({
            items: {}
          });
        } else if (res.cancel) {
          console.log('aaa');
          return;
        }
      }
    })
  },
  delone: function (event) {
    //设置变量index
    let index = parseInt(event.target.dataset.index);
    //从数组中删除
    this.data.items.splice(index, 1);
    this.setData({
      items: this.data.items
    });
  },
  //下载
  down:function(){
    var that = this
    wx.downloadFile({
      url: 'http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg', //有效的地址
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          var tempFilePath = res.tempFilePath
          that.setData({
            aa: tempFilePath
          })
          // wx.saveFile({
          //   tempFilePath: tempFilePath,
            
          //   success:function(res){
          //     console.log(res),
          //     that.setData({
          //       aa: res.savedFilePath
          //     })
          //   }
          // })
          //这里是获取获取的文件list
         wx.getSavedFileList({
           success:function(res){
             console.log(res)
           }
         })
        }
      }
    })
  }
})
