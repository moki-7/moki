<script setup>

import LayoutHeader from './LayoutHeader.vue'
import LayoutMenu from './LayoutMenu.vue'

</script>


<template>
    <div class="home">

        <header>
            <LayoutHeader></LayoutHeader>
        </header>


        <main>
            <div class="menu">
                <LayoutMenu></LayoutMenu>
            </div>

            <div class="client">
                <router-view></router-view>
            </div>
        </main>

    </div>

    
</template>


<style lang="css" scoped>

.home{
    height: 100%;
    overflow: hidden;

    display:flex;
    flex-direction: column;
    background-color: rgba(204, 197, 211, 0.947);


    >header{
        height: 50px;
        background-color: rgb(199, 239, 236);
        margin: 5px;
    }

    >main{
        flex: 1%;
        background-color:rgb(179, 189, 245);
        overflow: hidden;
        margin:5px;


        display: flex;
        flex-direction: row;

        >.menu{
            
            background-color:rgb(250, 245, 245);
            overflow: auto;
        }

        >.client{
            flex:1;
            background-color:rgb(209, 153, 212);
            overflow: hidden;
        }

    }

}

</style>