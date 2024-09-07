<script setup>
import HomeThink from './HomeThink.vue';
import ThinkMyWorks from './ThinkMyWorks.vue';
import { showNo } from './ThinkData.js';

const current=ref(HomeThink);
//监听器
watch(
    showNo,
    (newValue)=>{
        if(newValue===1){
            current.value=HomeThink;
        }else if(newValue===2){
            current.value=ThinkMyWorks;
        }
        
    },
    {immediate:true}
);

</script>

<template>

    <component :is="current"></component>

</template>

<style scoped>

</style>