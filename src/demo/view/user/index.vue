<template>
  <div class="container">
    <div class="head">
      <div class="ayc-user f">
        <div class="user-top">
          <img src="../../assets/img/img1.jpg" alt>
        </div>
        <p class="user-name">
          <b>小怪兽</b>
        </p>
        <img class="img1" src="../../assets/img/nv.png" alt>
        <img class="img1 img2" src="../../assets/img/nan.png" alt>
        <div class="user-bto f">
          <div class="imger">
            <img src="../../assets/img/youzhizuozhe2x.png" alt>
            <p class="p1">作者</p>
          </div>
          <p>时光的深处，红尘的渡口。我依然伫立净水一方，以字暖情，惬意的生活萨达萨达是</p>
          <img class="img3" src="../../assets/img/右箭头@2x.png" alt>
        </div>
        <div class="user-boot">
          <ul>
            <li>
              <p>
                关注
                <span>
                  <b>124</b>
                </span>
              </p>
            </li>
            <li>
              <p>|</p>
            </li>
            <li>
              <p>
                粉丝
                <span>
                  <b>546</b>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="list userCenter">
      <li v-for="item in items" @click="$router.push(item.push)" :class="item.cls">
        <div>
          <img class="img5" src="../../assets/img/我的消息@2x.png" alt>
          <p>{{item.tit}}</p>
        </div>
        <div>
          <span>{{item.desc}}</span>
          <img class="img4" src="../../assets/img/右箭头@2x.png" alt>
        </div>
      </li>
    </ul>
    <footComponent :idx="2"></footComponent>
  </div>
</template>
<script>
//引入页面数据
import data from "../../data/user/get_info_new.json";

export default {
  data() {
    return {
      data: {},
      items: [
        {
          push: "/user/message",
          tit: "我的消息",
          desc: "消息列表"
        },
        {
          push: "/user/articleList",
          tit: "我的文章",
          desc: "我的文章都在这里"
        },
        {
          push: "/user/rewardList",
          tit: "我的打赏",
          desc: "查看打赏详情"
        },
        {
          push: "/user/collectList",
          tit: "我的收藏",
          desc: "收藏文章列表"
        },
        {
          push: "/user/feedback",
          tit: "申请作者",
          desc: "马上开始实现写作梦想"
        },
        {
          push: "/user/aboutUs",
          tit: "爱原创榜单",
          desc: "各种人气榜"
        },
        {
          push: "/user/invite",
          tit: "邀请",
          desc: "邀请亲朋好友得OIT"
        },
        {
          push: "/user/helpList",
          tit: "帮助中心",
          desc: "不懂的看这里"
        },
        {
          push: "/user/setting",
          tit: "设置",
          desc: "相关设置"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    // 页面加载时拉取数据
    this.data = data.data.userInfo;
  }
};
</script>

<style scoped>
@import "../../assets/css/userIndex.css";
.container {
  background: #ffffff;
}
.container:before {
  height: 0;
}
</style>
