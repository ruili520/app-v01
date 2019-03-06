<template>
  <div class="container">
    <topComponent title='我的打赏'>
      <span class="back" @click="$router.push('/user')" slot="left"></span>
    </topComponent>
    <router-view></router-view>
  </div>
</template>
