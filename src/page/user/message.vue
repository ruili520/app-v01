<template>
  <div>
    <div>
      <topComponent title="我的消息"></topComponent>
    </div>
    <ul class="ul-top">
      <li class="user" v-for="itms in dope" :key="itms.id">
        <div class="user-cont">
          <img src="../../assets/img/default.png" alt>
          <div>
            <h2>{{itms.title}}</h2>
            <p class="p2">{{itms.create}}</p>
            <p class="p3">{{itms.desc}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      title: "我的消息",
      dope: [
        {
          id: 1,
          title: "系统消息",
          desc: "这是一条测试数据，该功能已完善",
          create: "2019-02-28 14:12:00"
        },
        {
          id: 2,
          title: "系统消息",
          desc: "这是一条测试数据，该功能已完善1111",
          create: "2019-02-28 14:13:00"
        }
      ]
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.push("/tabpages3");
    }
  }
};
</script>

<style scoped>
.ul-top {
  margin-top: 13.3333vw;
}
.user-cont {
  display: flex;
  justify-content: flex-start;
}
.user img {
  width: 11.2vw;
  height: 11.2vw;
  padding: 2.6667vw;
}
.user {
  background: #f8f9f9;
  padding: 4.2667vw;
}
.user-cont {
  background: #fff;
  border-radius: 2.6667vw;
}
.user-cont div {
  padding: 2.6667vw;
}
.user-cont h2 {
  font-size: 4.2667vw;
  font-weight: bold;
}
.p2 {
  font-size: 2.6667vw;
  padding: 2.6667vw 0;
  color: #bec2c7;
}
.p3 {
  font-size: 3.2vw;
}
</style>
