<template>
  <div class="rewardWarp">
    <rewardTitle :idx='1'></rewardTitle>
    <rewardList v-if='hasReward' :items="list"></rewardList>
    <noMore v-if='!hasReward' class='error-reward'></noMore>
  </div>
</template>
<script>
  //引入页面数据
  import vouchers from '../../data/user/voucher1.json';

  export default {
    data() {
      return {
        hasReward: true,
        list: []
      }
    },
    mounted() {
      //页面加载时 拉取数据
      if (vouchers.data.length === 0) this.hasReward = false;
      else this.list = vouchers.data;
    }
  }
</script>
