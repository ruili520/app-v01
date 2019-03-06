<!--认证作者页面-->
<template>
  <div class="container">
    <topComponent title='申请作者'><span class="save" @click='goSave' slot="right">提交</span></topComponent>
    <div>
      <h2 class="apply">申请成为爱原创作者需要绑定手机</h2>
      <ul class="select">
        <li class="enter colore" @click="bindTelephone">绑定手机</li>
      </ul>
      <div class="welfare">
        <h3>绑定手机后您可以:</h3>
        <ul>
          <li>
            <img src="../../assets/img/duihao.png" alt=""/>
            成为作者
          </li>
          <li>
            <img src="../../assets/img/duihao.png" alt=""/>
            提现
          </li>
          <li>
            <img src="../../assets/img/duihao.png" alt=""/>
            获得50OIT
          </li>
          <li>
            <img src="../../assets/img/duihao.png" alt=""/>
            其他更多官方福利
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        /*defaultVal: '感谢您对' + this.appName + '的关注，您的意见和建议能帮助我们做的更好！',
        textArea: '',   // 绑定textarea
        textNum: 200    // 字数限制*/
      }
    },
    methods:{
      goSave(){

      }
    }
  }
  /*export default {
    name:'certifiedauthor',
    data(){
      return{
        title:'认证作者'
      }
    },
    methods:{
      /!*onClickLeft(){
        this.$router.back(-1)
      },
      bindTelephone(){
        this.$router.push('/bindphone');
      }*!/
    }
  }*/
</script>

<style scoped>
  @import "../../assets/css/author.css";
</style>
