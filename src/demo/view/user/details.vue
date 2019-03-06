<!--个人详情页面-->
<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft"/>
    <van-cell-group>
      <van-cell title="头像" is-link>
        <van-uploader :after-read="onRead">
          <img style="width:48px" :src="src">
        </van-uploader>
      </van-cell>
      <van-cell title="笔名" :value="userInfo.penName" is-link to="uppenname"/>
      <van-cell title="年龄" value="18岁" is-link @click="showDate()"/>
      <van-cell title="性别" :value="userInfo.sex==1?'男':'女'" is-link @click="showSex()"/>
      <van-cell title="地区" :value="userInfo.province+userInfo.city" is-link @click="showArea()"/>
      <van-cell title="个性签名" value="这是个性签名哦~" is-link to="upsign"/>
    </van-cell-group>

    <!--修改信息弹出层-->
    <van-popup v-model="changeage" position="bottom">
      <van-datetime-picker
        title="选择年龄"
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        show-toolbar="false"
        @confirm="ageonConfirm"
      />
    </van-popup>

    <van-popup v-model="changesex" position="bottom">
      <van-picker show-toolbar title="选择性别" :columns="sexList" @confirm="sexonConfirm"/>
    </van-popup>
    <van-popup v-model="changearea" position="bottom">
      <van-area :area-list="areaList" :columns-num="2" value="110101" @confirm="areaonConfirm"/>
      <!--<van-area show-toolbar title="选择地区"  :="sexList" @confirm="sexonConfirm"-->
      <!--/>-->
    </van-popup>
  </div>
</template>

<script>
import areaList from "@/assets/js/area";

export default {
  name: "details",
  components: {
    areaList
  },
  data() {
    return {
      title: "编辑资料",
      mobile: "",
      changeage: false,
      changesex: false,
      changearea: false,
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(2030, 1, 1),
      sexList: ["男", "女"],
      currentDate: new Date(),
      areaList: areaList,
      province: "",
      city: "",
      age: "",
      sex: "",
      userInfo: [],
      src: ""
    };
  },
  mounted() {
    var _this = this;
    var data = {};
    _this.AycPost(
      "/api/userDetail/getUserInfo",
      data,
      function(result) {
        _this.userInfo = result;
        _this.src = result.avatar;
      },
      function(error) {
        _this.AycToast(error, "middle", 1000);
      }
    );
  },
  created() {},
  methods: {
    /*修改头像，会自动弹出拍照和相册*/
    onRead(file) {
      console.log(file);
    },
    /*返回箭头*/
    onClickLeft() {
      var _this = this;
      _this.$router.go(-1);
    },
    /*修改年龄,1.0版本没有年龄字段*/
    ageonConfirm(value) {
      //获取年龄
      /*var age = parseInt(Math.floor(new Date() - new Date(parseTime(value))) / 30758400000);
        this.age = age;
        this.axios({
          method: 'post',
          url: '/api/userDetail/updateUser',
          headers:{
            token:'APP155135365642127'
          },
          data: {
            age: this.age
          }
        }).then(result => {
          if (result.data.code=="100000"){
            this.changeage = false;
            this.$router.push('/userdetails');
          }
        })*/
    },
    /*修改性别*/
    sexonConfirm(value) {
      //获取性别
      var _this = this;
      var data = {
        sex: this.sex == "女" ? 2 : 1
      };
      _this.AycPost(
        "/api/userDetail/updateUser",
        data,
        function(result) {
          _this.$toast("性别修改成功");
          _this.$router.go(0);
        },
        function(error) {
          _this.AycToast(error, "middle", 1000);
        }
      );
    },
    /*修改地区*/
    areaonConfirm(value) {
      //获取地区
      var jsonData = JSON.stringify(value); // 转成JSON格式
      var item = JSON.parse(jsonData); //转换成对象
      this.province = item[0].name;
      this.city = item[1].name;
      var _this = this;
      var data = {
        province: this.province,
        city: this.city
      };
      _this.AycPost(
        "/api/userDetail/updateUser",
        data,
        function(result) {
          _this.$toast("地区修改成功");
          _this.$router.go(0);
        },
        function(error) {
          _this.AycToast(error, "middle", 1000);
        }
      );
    },
    showDate() {
      if (!this.changeage) {
        this.changeage = true;
      } else {
        this.changeage = false;
      }
    },
    showSex() {
      if (!this.changesex) {
        this.changesex = true;
      } else {
        this.changesex = false;
      }
    },
    showArea() {
      if (!this.changearea) {
        this.changearea = true;
      } else {
        this.changearea = false;
      }
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    }
  }
};

/*格式化时间类型*/
function parseTime(d) {
  const newDate =
    d.getFullYear() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getDate() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes() +
    ":" +
    d.getSeconds();
  return newDate;
}
</script>
<style lang="less" scoped>
@import "../../assets/css/login.css";
</style>
