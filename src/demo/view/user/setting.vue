<template>
	<div class="container">
		<topComponent title='设置'></topComponent>
    <div class="list setting">
      <ul>
        <li>
          <div>
            <img class="img5" src="../../assets/img/我的消息@2x.png" alt="" />
            <p><b>账户管理</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
        <li>
          <div>
            <img class="img5" src="../../assets/img/我的文章@2x.png" alt="" />
            <p><b>清除缓存</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
        <li>
          <div>
            <img class="img5" src="../../assets/img/我的打赏@2x.png" alt="" />
            <p><b>意见反馈</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
        <li>
          <div>
            <img class="img5" src="../../assets/img/我的收藏@2x.png" alt="" />
            <p><b>给爱原创评分</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
        <li>
          <div>
            <img class="img5" src="../../assets/img/申请作者@2x.png" alt="" />
            <p><b>错误上报</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
        <li>
          <div>
            <img class="img5" src="../../assets/img/爱原创榜单@2x.png" alt="" />
            <p><b>隐私协议</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
        <li>
          <div>
            <img class="img5" src="../../assets/img/邀请@2x.png" alt="" />
            <p><b>版本更新</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
        <li @click='$router.push("/user/aboutUs")'>
          <div>
            <img class="img5" src="../../assets/img/帮助中心@2x.png" alt="" />
            <p><b>关于我们</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
        <li @click="logOut">
          <div>
            <img class="img5" src="../../assets/img/设置@2x.png" alt="" />
            <p><b>退出登录</b></p>
          </div>
          <div>
            <img class="img4" src="../../assets/img/右箭头@2x.png" alt="" />
          </div>
        </li>
      </ul>
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
      logOut(){
        alert("你已退出登录");
      }
    },
    mounted() {
    }
  }
</script>
<style scoped>
  @import "../../assets/css/setting.css";
</style>
