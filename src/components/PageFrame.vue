<script setup>
</script>

<template>

    <div class="page-container">

        <div class="title-container">
            <span></span>标题栏<span></span>
        </div>

        <div class="toolbar-container">

        </div>

        <div class="content-container">

        </div>

    </div>

</template>

<style scoped>
.page-container{
    height:100%;
    overflow:hidden;
    background-color: rgb(223, 131, 186);
    margin: 5px;
    
    display: flex;
    flex-direction: column ;
    >.title-container{
        height:50px;
        background-color: rgb(224, 190, 221);
        display: flex;
        flex-direction: row ;
        justify-content: space-between;
        color:lightcyan;
        font-size: 30px;
        font-family:"华文彩云";
    }

    >.toolbar-container{
        height:50px;
        background-color: rgb(242, 166, 235);

    }

    >.content-container{
        flex:1;
        overflow:auto;
        background-color: rgb(245, 119, 239);
    }

}
</style>