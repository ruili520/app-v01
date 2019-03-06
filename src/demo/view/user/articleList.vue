<template>
  <div class="container">
    <topComponent title='我的文章'></topComponent>
    <div class="geren" style="width:29vw;">
      <p>
        <span>123</span>原创文章·
      </p>
    </div>
    <ul class="article">
      <li class="user" v-for="item in items">
        <div class="user1">
          <div class="userimg">
            <img src="" alt="">
          </div>
          <div class="userinfo">
            <p class="username">{{item.penName}}</p>
            <p class="time">{{item.createdAt}}</p>
          </div>
          <div class="tob"></div>
        </div>
        <div class="user2">
          <p class="headline">{{item.title}}</p>
          <p class="content" v-html="item.desc"></p>
        </div>
        <div class="userbot">
          <ul>
            <li>
              <img src="../../assets/img/搜索结果页-评论@2x.png" alt="">
              <span>752</span>
            </li>
            <li>
              <img src="../../assets/img/文章详情-点赞-灰@2x.png" alt="">
              <span>1.2万</span>
            </li>
            <li>
              <img src="../../assets/img/收藏-灰@2x.png" alt="">
              <span>752</span>
            </li>
            <li>
              <img src="../../assets/img/分享@2x.png" alt="">
              <span>0</span>
            </li>
          </ul>
          <div class="more">
            <img src="../../assets//img/更多@2x.png" alt="">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            penName: "张三",
            createdAt: "18点56分",
            title: "AI教程！夏日清凉配色扁平插画制作思路",
            desc: "不知不觉又到夏天了，记忆中的夏天除了背心+大裤衩子外，一定要有浓郁的绿色，今天的教程会教会你如何通..."
          },
          {
            penName: "张三",
            createdAt: "18点56分",
            title: "AI教程！夏日清凉配色扁平插画制作思路",
            desc: "不知不觉又到夏天了，记忆中的夏天除了背心+大裤衩子外，一定要有浓郁的绿色，今天的教程会教会你如何通..."
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/articleList.css";
</style>
