<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in list">
        <div class="user-tow">
          <div class="user1">
            <div class="userimg">
              <img src="../../assets/img/img1.jpg" alt>
            </div>
            <div class="userinfo">
              <p class="username">{{item.tit}}</p>
              <p class="time">{{item.time}}</p>
            </div>
            <div class="tcp">{{item.con}}</div>
          </div>
          <router-link to="/loan/articleDetail">
            <div class="user2">
              <p class="headline">{{item.headline}}</p>
              <p class="contentss">{{item.conter}}</p>
            </div>
          </router-link>
          <div class="userbot">
            <ul>
              <li>
                <img src="../../assets/img/sousuopinlunye.png" alt>
                <span>752</span>
              </li>
              <li>
                <img src="../../assets/img/wenzhangxiangqingdianzan.png" alt>
                <span>1.2万</span>
              </li>
              <li>
                <img src="../../assets/img/shoucanghui.png" alt>
                <span>752</span>
              </li>
              <li>
                <img src="../../assets/img/fenxiang.png" alt>
                <span>0</span>
              </li>
            </ul>
            <div class="more">
              <img src="../../assets/img/gengduo.png" alt>
            </div>
          </div>
        </div>
      </li>
      <li v-for="(item,index) in list">
        <div class="user-tow">
          <div class="user1">
            <div class="userimg">
              <img src="../../assets/img/img1.jpg" alt>
            </div>
            <div class="userinfo">
              <p class="username">{{item.tit}}</p>
              <p class="time">{{item.time}}</p>
            </div>
            <div class="tob"></div>
          </div>
          <router-link to="/loan/articleDetail">
            <div class="content-2">
              <div class="user3">
                <p class="headline">{{item.headline}}</p>
                <p class="contentss">{{item.conter}}</p>
              </div>
              <img src="../../assets/img/img1.jpg" alt>
            </div>
          </router-link>
          <div class="userbot">
            <ul>
              <li>
                <img src="../../assets/img/sousuopinlunye.png" alt>
                <span>752</span>
              </li>
              <li>
                <img src="../../assets/img/wenzhangxiangqingdianzan.png" alt>
                <span>1.2万</span>
              </li>
              <li>
                <img src="../../assets/img/shoucanghui.png" alt>
                <span>752</span>
              </li>
              <li>
                <img src="../../assets/img/fenxiang.png" alt>
                <span>0</span>
              </li>
            </ul>
            <div class="more">
              <img src="../../assets/img/gengduo.png" alt>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <footComponent :idx="0"></footComponent>
  </div>
</template>
<script>
// 引入banner组件
import loanBanner from "../../components/loan/banner";

export default {
  data() {
    return {
      list: [
        {
          cls: "",
          tit: "某微--JOKER",
          time: "刚刚",
          con: "置顶",
          headline: "AI教程！夏日清凉配色扁平插画制作思路",
          conter:
            "不知不觉又到夏天了，记忆中的夏天除了背心+大裤衩子外，一定要有浓郁的绿色，今天的教程会教会你如何通...",
          push: "/loan/micro"
        }
      ]
    };
  },
  components: {
    loanBanner
  }
};
</script>
<style scoped>
.container {
  background: #f9f9f9;
}
.user-tow {
  background: #fff;
  border-radius: 3.3333vw;
  width: 93.3333vw;
  margin-left: 3vw;
  margin-bottom: 17.6667vw;
}
.userimg img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.user1 {
  height: 16vw;
  display: flex;
  justify-content: space-between;
  margin-top: -12.4vw;
}
.userimg {
  margin: 2.4vw 0 0 3.6667vw;
  width: 16vw;
  height: 16vw;
  border-radius: 50%;
  /* background: #333; */
}
.userinfo {
  margin: 4.4vw 0 0 -26.3333vw;
}
.username {
  margin-bottom: 2.3333vw;
  font-size: 3.8667vw;
}
.time {
  font-size: 3.8vw;
  color: #bdc2cc;
}
.tcp {
  width: 15.3333vw;
  height: 7.6vw;
  border: 0.2667vw solid #ff9197;
  border-radius: 29%;
  text-align: center;
  line-height: 7.6vw;
  color: #ff9197;
  margin: 6.5333vw 3.2vw 0 0;
  font-size: 3.8vw;
}
.user2 {
  padding: 5.3333vw 5.3333vw;
}
.headline {
  font-size: 5.1vw;
  font-weight: bold;
  margin-bottom: 2vw;
  display: -webkit-box;
  max-height: 13vw;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.contentss {
  font-size: 4.1vw;
  display: -webkit-box;
  max-height: 10vw;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.userbot {
  display: flex;
  justify-content: space-between;
}
.userbot ul {
  width: 67.3333vw;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.6667vw;
}
.userbot li {
  height: 5.3333vw;
  width: 25%;
  text-align: center;
  font-size: 3.2667vw;
  color: #a2a7b2;
}
.userbot li img {
  width: 3.2667vw;
  height: 3.2667vw;
}
.more {
  line-height: 3.3333vw;
  margin-right: 7vw;
}
.more img {
  width: 5.2667vw;
  height: 2.2667vw;
}
.userbot span {
  line-height: 5.3333vw;
}
.user3 {
  width: 53.3333vw;
  padding: 5.6667vw 5.6667vw 0 5.6667vw;
  margin-bottom: 9.6667vw;
}
.tob {
  width: 15.3333vw;
  height: 7.6vw;
}
.content-2 {
  margin-bottom: -4.6667vw;
  display: flex;
  justify-content: space-between;
}
.content-2 img {
  width: 28.6667vw;
  height: 18.3333vw;
  border-radius: 2vw;
  margin: 6.3333vw 3.2vw 0 0;
}
.imgs img {
  width: 26.6667vw;
  height: 21.3333vw;
  border-radius: 2vw;
  margin: 4.3333vw 0.2vw -0.4vw -0.3333vw;
}
</style>

