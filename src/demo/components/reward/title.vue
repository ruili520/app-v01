<template>
  <ul class="tabTitle">
    <li v-for='(item,index) of items' :class='{on : index === idx }' @click="$router.push(item.push)">{{item.name}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            name: "被打赏",
            push: "/user/rewardList"
          },
          {
            name: "打赏",
            push: "/user/rewardList/byMe"
          }
        ]
      }
    },
    props: ['idx']
  }
</script>
