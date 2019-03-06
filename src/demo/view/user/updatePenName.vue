<template>
  <div class="container">
    <topComponent title='修改笔名'><span class="save" slot="right">保存</span></topComponent>
    <div class="inp">
      <form>
        <input type="text" placeholder="6~12个字符，不支特殊字符">
      </form>
    </div>
    <div id="errorMsg" class="PanD">
      <div>
        <img src="../../assets/img/！.png" alt="">
        <p>笔名输入不正确</p>
      </div>
      <p><span id="fontNum">0</span>/12</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //data: {},
      }
    },
    methods: {
      loginOut() {
        this.$router.push('/login')    // 暂时不做处理只去登录页面
      },

    },
    mounted() {
      // 页面加载时拉取数据
      //this.data = data.data.userInfo
    }
  }
</script>


