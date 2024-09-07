<script setup>

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store=useStore();

const router=useRouter();

const handleClear=()=>{
  store.commit('User/clearToken');
  router.push('/login');

}



</script>


<template>
    
    <el-button @click="handleClear">清空token</el-button>

</template>


<style>


</style>
