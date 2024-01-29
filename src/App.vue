<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
<<<<<<< HEAD
import request from './utils/requests';

request({
  method: 'GET',
  url: '/tipos2'   //向自己的服务器请求
}).then((res) => {
  console.log(res)
})
=======
import  request from './utils/requests';

request ({
          method: 'GET',
     url: '/tipos2' }).then((res) =>{
  console.log(res)
   })
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8

</script>
 

<template>
  <RouterView />
</template>

<style scoped></style>
