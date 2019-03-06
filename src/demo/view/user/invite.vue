<template>
    <div class="container">
      <div class="inviteTop">
        <span class="back" @click='goBack'></span>
      </div>
      <div class="inviteHead">
        <img src="../../assets/img/邀请好友-头部@2x.png">
      </div>
      <h1 class="title">个性海报分享</h1>
      <div class="guanzhu-area">
          <div class="user">
              <img src="../../assets/img/默认头像.png" alt="">
              <div>
                  <p>等待开放</p>
                  <p><span>11-11</span><span>13:00</span></p>
              </div>
          </div>
      </div>
      <div class="operation">
          <div class="chang">长按图片保存到手机相册</div><div class="huan"> <span class="icon"></span> <span>换一种风格</span></div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      }
    },
  }
</script>

<style scoped>
  .container{
    background: #fff;
  }
  .container:before{
    height: 0;
  }
  .inviteTop {
    background-color: #ffffff;
    position: fixed;
    top: 0;
    z-index: 9;
    width: 100%;
  }

  .inviteTop .back {
    left: 1.5625rem;
  }
  .inviteTop .back:after {
    display: block;
    font-family: 'icons';
    content: "\E689";
    width: 0.9375rem;
    line-height: 2.75rem;
    position: absolute;
    top: 0;
    left: -0.875rem;
  }
  .inviteTop a, .inviteTop span {
    color: #e8e8e8;
    text-decoration: none;
    position: absolute;
    left: 0.9375rem;
    top: 0;
    cursor: pointer;
  }
  .inviteHead img{
      width: 100%;
      height: auto;
      background-size: cover;
  }
  .title {
      text-align: center;
      font-size: 4vw;
      color: #aeb2bc;
  }
  .guanzhu-area{
      width:53.3333vw;
      height:90.9333vw;
      background: url('../../assets/img/海报-占位@3x.png') no-repeat;
      background-size: 100% 100%;
      margin:auto;
  }
  .operation{
      display:flex;
      justify-content: space-around;
      align-items:center;
  }
  .operation .chang{
      font-size:2.6667vw;
      color:#c0c4cb;
  }
  .operation .huan{
      font-size:2.6667vw;
      color:#80d8ff;
  }
  .sj-media{
      width:100%;
      height:27.6vw;
      margin-top:7.2vw;
      padding-top:5.3333vw;
      background-color: #f9f9f9;
  }
  .sj-media .sj-media-title{
      width:73.6vw;
      margin: auto;
      display:flex;
      justify-content: space-between;
      align-items:center;
  }
  .sj-media .sj-media-title .line{
      width:21.3333vw;
      height:0.2667vw;
      background-color: #e5e8ef;
  }
  .sj-media .sj-media-title .desc{
      font-size:2.6667vw;
      color:#b4b8c1;
  }
  .sj-media-other{
      width:73.6vw;
      height:9.3333vw;
      margin: 8vw auto;
      display:flex;
      justify-content: space-between;
      align-items:center;
  }
  .sj-media .sj-media-other .other{
      width:9.3333vw;
      height:9.3333vw;
      border-radius: 50%;
  }
  .sj-media-other{
      display: flex;
      justify-content: center;
  }
  .sj-media-other img{
      width: 9.3333vw;
      height: 9.3333vw;
      padding: 3.3333vw
  }
  .user{
      width: 32.6667vw;
      display: flex;
      justify-content: center;
      font-size: 2.6667vw;
      border-radius: 5.6666vw;
      background: #707bf3;
      color: #fff;
      position: relative;
      top: 6.6667vw;
      left: 2.6667vw;
  }
  .user img{
      width: 10.3333vw;
      height: 10.333vw;
  }
</style>
