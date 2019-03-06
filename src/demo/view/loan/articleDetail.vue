<template>
  <div>
    <div class="complete">
      <topComponent title="文章详情"></topComponent>
      <!-- 文章详情头部 -->
      <ul class="content">
        <li>
          <h1>{{result.title}}</h1>
        </li>
        <!-- 文章名 -->
        <li>
          <ul class="users">
            <li class="userimg">
              <!-- <img :src="result.avatar" alt> -->
              <img src="../../assets/img/img1.jpg" alt>
            </li>
            <li class="username-t">
              <div class="username">
                <!-- <p>{{result.author}}</p> -->
                <p>某微—JOKER</p>
                <div>
                  <p>原创</p>
                </div>
              </div>
              <p class="itme">
                <!-- <span>{{result.createdAt}}</span> -->
                <span>2018-01-01 13:00</span>
                字数
                <!-- <span>{{result.num}}</span> -->
                <span>10万</span>
              </p>
            </li>
            <li>
              <div class="attention">关注</div>
            </li>
          </ul>
          <!-- 作者 -->
        </li>
      </ul>
      <!-- <ul class="contents" v-html="result.desc"></ul> -->
      <ul class="contenes">
        <li style="padding:16px;">
          <p>暗地里卡设计大师大声道撒撒大大萨达挖防守打法asd哇塞啊撒瓦达大大大发士大夫撒暗地里卡设计大师大声道撒撒大大萨达挖防守打法asd哇塞啊撒瓦达大大大发士大夫撒暗地里卡设计大师大声道撒撒大大萨达挖防守打法asd哇塞啊撒瓦达大大大发士大夫撒暗地里卡设计大师大声道撒撒大大萨达挖防守打法asd哇塞啊撒瓦达大大大发士大夫撒暗地里卡设计大师大声道撒撒大大萨达挖防守打法asd哇塞啊撒瓦达大大大发士大夫撒暗地里卡设计大师大声道撒撒大大萨达挖防守打法asd哇塞啊撒瓦达大大大发士大夫撒暗地里卡设计大师大声道撒撒大大萨达挖防守打法asd哇塞啊撒瓦达大大大发士大夫撒暗地里卡设计大师大声道撒撒大大萨达挖防守打法asd哇塞啊撒瓦达大大大发士大夫撒</p>
        </li>
      </ul>
      <!-- 文章 -->
      <ul class="disclaimer">
        <li>
          <p>免责声明</p>
        </li>
      </ul>
      <!-- 免责 -->
      <ul class="label">
        <li>财经</li>
      </ul>
      <!-- 标签 -->
      <ul class="select">
        <li class="enter red">打赏</li>
      </ul>
      <ul class="operation">
        <li>
          <img src="../../assets/img/sousuopinlunye.png" alt>
          <span>{{result.commentNum}}</span>
        </li>
        <li>
          <img src="../../assets/img/dianzanhui.png" alt>
          <span>{{result.likeNum}}</span>
        </li>
        <li>
          <img src="../../assets/img/shoucanghui.png" alt>
          <span>{{result.collectNum}}</span>
        </li>
        <li>
          <img src="../../assets/img/zhuanfa.png" alt>
          <span>{{result.shareNum}}</span>
        </li>
      </ul>
      <!-- 文章与用户交互详情 -->
      <div class="recom">
        <h2>相关内容</h2>
        <ul>
          <li>
            <div class="left">
              <p>关于保存功能的设计，这篇可能是最全面的总结!</p>
              <div class="aut">
                <p class="auname">朱磊</p>
                <p>
                  <img src="../../assets/img/sousuopinlunye.png" alt>
                  <span class="p2">752</span>
                </p>
              </div>
            </div>
            <div class="rig">
              <img src="../../assets/img/rocket.png" alt>
            </div>
          </li>
          <li>
            <div class="left">
              <p>关于保存功能的设计，这篇可能是最全面的总结!</p>
              <div class="aut">
                <p class="auname">朱磊</p>
                <p>
                  <img src="../../assets/img/sousuopinlunye.png" alt>
                  <span class="p2">752</span>
                </p>
              </div>
            </div>
            <div class="rig">
              <img src="../../assets/img/rocket.png" alt>
            </div>
          </li>
        </ul>
        <!-- 相关内容 -->
      </div>
      <div class="comment">
        <h2>评论</h2>
        <ul class="comment-1">
          <li class="comment-2" v-for="(item, index) in comments">
            <ul class="comment-cont">
              <li>
                <img class="comment-img" src="../../assets/img/default.png" alt>
              </li>
              <li>
                <p class="readername">&nbsp;</p>
                <p class="readercont">{{item.desc}}</p>
                <p class="readeritme">
                  <span>{{item.createdAt}}</span>
                </p>
              </li>
              <!--<li class="praise">-->
              <!--<span>11</span>-->
              <!--<img src="../../assets/img/dianzanhui.png" alt="">-->
              <!--<div class="reply"><p>12条回复</p></div>-->
              <!--</li>-->
            </ul>
          </li>
        </ul>
        <!-- 用户评论 -->
      </div>
      <ul class="select select-da">
        <li>
          <button class="select select-da enter">更多</button>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="enter txt">
        <img src="../../assets/img/yijian.png" alt>
        <input type="text">
      </div>
      <div class="open">
        <img src="../../assets/img/dianzanhui.png" alt>
        <img src="../../assets/img/shoucanghui.png" alt>
        <img src="../../assets/img/zhuanfa.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleDetail",
  data() {
    return {
      title: "文章详情",
      result: {},
      comments: []
    };
  }
  /*帮助中心列表展示*/
  // mounted() {
  //   this.axios({
  //     method: 'post',
  //     url: '/api/article/desc',
  //     data: {
  //       id : '15107'
  //     }
  //   }).then(result => {
  //     this.result = result.data.data;
  //   }),
  //   this.axios({
  //     method: 'post',
  //     url: '/api/articleComment/list',
  //     data: {
  //       articleId : '15107',
  //       pageNum: 1,
  //       pageSize: 3
  //     }
  //   }).then(result => {
  //     this.comments = result.data.data.list;
  //     console.log(result);
  //   })
  // },
};
</script>

<style scoped>
@import "../../assets/css/articleDetail.css";
</style>

