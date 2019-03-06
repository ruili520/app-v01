<template>
  <div class="container">
    <topComponent title='编辑资料'></topComponent>
    <!--<ul class="listCom list-arrow list-icon no-top">
      <listComponent v-for='data in datas' :class='data.cls' @click="$router.push(data.push)" :title='data.tit'>
      </listComponent>
    </ul>-->
    <ul>
      <li>
          <p class="dis">头像</p>
          <div class="Hd">
            <div class="List">
              <img src="../../assets/img/默认头像.png" alt="">
            </div>
            <div class="Con">
              <img src="../../assets/img/右箭头.png" alt="">
            </div>
          </div>
      </li>
      <li>
        <p class="liBm">笔名</p>
        <div class="liName">
          <p>Algela Brown</p>
          <img src="../../assets/img/右箭头.png" alt="">
        </div>
      </li>
      <li>
        <p class="liBm">年龄</p>
        <div class="liName">
          <p>18岁</p>
          <img src="../../assets/img/右箭头.png" alt="">
        </div>
      </li>
      <li>
        <p class="liBm">性别</p>
        <div class="liName">
          <p>男</p>
          <img src="../../assets/img/右箭头.png" alt="">
        </div>
      </li>
      <li>
        <p class="liBm">地区</p>
        <div class="liName">
          <p>上海</p>
          <img src="../../assets/img/右箭头.png" alt="">
        </div>
      </li>
      <li>
        <p class="liBm">个性签名</p>
        <div class="liName">
          <p>这里是签名哦~</p>
          <img src="../../assets/img/右箭头.png" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //已完成的开关
        datas: [{
          cls: 'icon-info',
          tit: '头像',
          push: '/credit/userInfo',
          isOk: false,
          param: 'userInfo'
        },
          {
            cls: 'icon-urgent',
            tit: '笔名',
            push: '/user/updatePenName',
            isOk: false,
            param: 'userContacts'
          },
          {
            cls: 'icon-scan',
            tit: '年龄',
            push: '/credit/scan',
            isOk: false,
            param: 'userScan'
          },
          {
            cls: 'icon-phone',
            tit: '性别',
            push: '/credit/mobile',
            isOk: false,
            param: 'userPhone'
          },
          {
            cls: 'icon-work',
            tit: '地区',
            push: '/credit/work',
            isOk: false,
            param: 'userWork'
          },
          {
            cls: 'icon-idPic',
            tit: '个性签名',
            push: '/user/personSign',
            isOk: false,
            param: 'userIdpic'
          }
        ]
      }
    },
    mounted() {

    }
  }
</script>
