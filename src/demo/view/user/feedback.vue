<template>
  <div class="container">
    <topComponent title='申请作者'></topComponent>
    <!--<div class="feedBack mt20">
      <div class="feed-text" :class='{col5 : textArea !== defaultVal}'>
        <textarea maxlength="200" class="limitFeed" @focus='textFocus()' @blur='textBlur()' v-model.tirm='textArea'></textarea>
      </div>
      <p class="feed-num">还可以输入<span class="limitNum">{{textNum}}</span>个字</p>
    </div>-->
    <div class="succeed">
      <img src="../../assets/img/yishizuozhe.png" alt="">
    </div>
    <div class="succeed-bottom">
      <h2>您已是爱原创作者</h2>
      <p class="p-b">您已经可以去爱原创PC端创作图文内容</p>
      <p class="p-b">爱原创创作平台网址</p>
      <p class="p-b">www.loveayc.com</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        defaultVal: '感谢您对' + this.appName + '的关注，您的意见和建议能帮助我们做的更好！',
        textArea: '',   // 绑定textarea
        textNum: 200    // 字数限制
      }
    }/*,
    methods: {
      goSave() {
        // 点击提交时进行两层判断
        if (this.textArea === this.defaultVal || this.textArea.length < 5) {
          this.$dialog('字数不能小于5')
        } else {
          this.$dialog(['提交成功', 'true']);
          // 正常是ajax提交内容--...此处省略
          setTimeout(() => {
            this.$router.push('/user');
          }, 1800)
        }
      }
    },
    watch: {
      "textArea": "changeText"
    },
    mounted() {
      this.textArea = this.defaultVal
    }*/
  }
</script>
<style scoped>
  @import "../../assets/css/author.css";
</style>
