<script setup>

    import {ref} from 'vue'

    defineProps({
        msg: String,
    })

    // let a={
    //     first:1,
    //     name:dfsf,
    //     setFirst(x){this.first=x;}
    // }

    const count=ref(0);
    let x="button";

    const f1=()=>{
        //响应式是.value++，不是直接++
        count.value++;
        y++;
    }

    
</script>


<template>   
    //赋值时,字符串可以不用v-bind;其他的如属性名、"2+4"数值(相当于数值"6"赋给对象)、true等等,使用v-bind:
    //也可以省略写:,为<button :type="x"></button>
    //v-on:click省略为@click
    <button v-bind:type="x" class="button" @click="f1">
        {{msg}} is {{ count }}
    </button>

</template>


<style scoped>

.button{
    color:red;
}



</style>