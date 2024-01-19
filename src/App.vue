<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import request from './utils/requests';

request({
  method: 'GET',
  url: '/tipos2'
}).then((res) => {
  console.log(res)
})

</script>
 

<template>
  <RouterView />
</template>

<style scoped></style>
