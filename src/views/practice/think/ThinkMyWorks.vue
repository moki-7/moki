<script setup>
import {showNo}  from './ThinkData.js';
const handleReturn=()=>{
    //修改ThinkData.js中的响应变量showNo=1
    showNo.value=1;
}

</script>

<template>

    <div class="page-container">

        <div class="title-container">
            <span></span>我的提交<span></span>
        </div>

        <div class="toolbar-container">
            <el-button @click="handleReturn">返回</el-button>
        </div>

        <div class="content-container">

        </div>

    </div>

</template>

<style scoped>
.page-container{
    height:100%;
    overflow:hidden;
    background-color: rgb(193, 229, 240);
    margin: 5px;
    
    display: flex;
    flex-direction: column ;
    >.title-container{
        height:50px;
        background-color: rgb(197, 238, 233);
        display: flex;
        flex-direction: row ;
        justify-content: space-between;
        color:lightcyan;
        font-size: 30px;
        font-family:"华文彩云";
    }

    >.toolbar-container{
        height:50px;
        background-color: rgb(223, 212, 193);

    }

    >.content-container{
        flex:1;
        overflow:auto;
        background-color: rgb(187, 233, 206);
    }

}
</style>