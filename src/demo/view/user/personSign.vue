<template>
  <div class="container">
    <topComponent title='个性签名'><span class="save" @click='goSave' slot="right">保存</span></topComponent>
    <div class="feedBack mt20">
      <div class="feed-text" :class='{col5 : textArea !== defaultVal}'>
        <textarea maxlength="30" class="limitFeed" @focus='textFocus()' @blur='textBlur()' v-model.tirm='textArea'></textarea>
      </div>
      <p class="feed-num">还可以输入<span class="limitNum">{{textNum}}</span>个字</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        defaultVal: '请输入个性签名',
        textArea: '',   // 绑定textarea
        textNum: 30    // 字数限制
      }
    },
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
    }
  }
</script>
