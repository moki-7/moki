<script setup>
import {ref} from 'vue'
import axios from 'axios'
import { useStore }  from 'vuex'
import { useRouter } from 'vue-router';
import {login} from "../axios/rootRequest.js"

const store =useStore();
const router =useRouter();

const userInfor=ref({
    username:'雾雨魔理沙(删掉)',
    password:'12345'
})

const msg=ref('');


const handleLogin=()=>{


    //发送到服务器的请求体的内容
    let data={
        username:userInfor.value.username,
        password:userInfor.value.password
    }

    //配置 URL 查询参数（query parameters）的。即，这些参数会被附加到请求 URL 的末尾
    let config={
        params:{
            username:userInfor.value.username,
            password:userInfor.value.password
        }
    }
      

    //post请求,带参数data
    //get请求,可以带参数data，也可以参数在url后面加?加参数内容

    /*post请求*/
   login(data)
    .then((res)=>{
       // console.log("axios.post.then==>");
       // console.log(res);

        if(res.code==200){

            //用户名和密码正确
            msg.value='登录成功'

            //向 User 模块中的 setToken mutation 提交
            store.commit('User/setToken', res.data.token)
            store.commit('User/setUserName', res.data.username)

            //通过 getters 获取 User 模块中的 getToken
            //store.getters['User/getToken'];
           
            //跳转到主页
            router.push('/');

        }else{

            //提示用户名或密码错误，清空操作
            msg.value=`账号(${userInfor.value.username})或密码(${userInfor.value.password})错误，请重新输入`
            userInfor.value.username=''
            userInfor.value.password=''

        }
    }).catch((err)=>{
        console.log("axios.catch==>");
        console.log(err);      
    })

   
    
}

const cleanMsg=()=>{
    msg.value=''
}

const cleanAll=()=>{
    msg.value=''
    userInfor.value.username=''
    userInfor.value.password=''
}

</script>


<template>
    

    <div class="login-box">

        <div class="login-avatar">
            <img src="@/assets/wymls.webp">
        </div>


        <el-form class="login-form">
           
            <el-form-item label="账号">
                <el-input v-model="userInfor.username" 
                            placeholder="请输入账号"
                            @input="cleanMsg"
                />
                
            </el-form-item>

            <el-form-item label="密码">
                <el-input v-model="userInfor.password" 
                            placeholder="请输入密码"
                            type="password"
                            @input="cleanMsg"
                />

            </el-form-item>

            <el-form-item>
                <div class="button">
                <el-button type="primary" 
                            round 
                            @click="handleLogin">登录
                </el-button>

                <el-button type="success" 
                            round
                            @click="cleanAll">重置
                </el-button>

                <el-button type="info" round>
                    <router-link to='/Register'>注册</router-link>
                </el-button> 

                </div>
            </el-form-item>
            
            <el-form-item>
                <p>{{msg}}</p>
            </el-form-item>

        </el-form>
        
    </div>
    
</template>


<style scoped>

.login-box{
    height:430px;
    width:600px;
    background-color:rgb(117, 117, 177);
    border-radius: 20px;               
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}

.login-avatar{
    height:270px;
    width:270px;
    background-color:rgb(190, 196, 198);
    border-radius:50%;
    border:1px solid red;
    padding: 10px;
    position: absolute; 
    transform:translate(50%,-50%);
    
    >img{
        width:100%;
        height: 100%;
        border-radius: 50%;
        background-color:rgb(221, 97, 194);
    }

}

.login-form{
    width:100%;
    height:280px;
    padding:50px;
    box-sizing:border-box;
    border-radius: 0 0 20px 20px; 
    background-color:rgb(154, 172, 239);
    position:absolute;
    bottom:0;
}

.button {
  width: 100%;
  height: 100%;
  background-color: aqua; 
  display: flex;
  border-radius: 20px;  
  justify-content: center;
}


</style>
