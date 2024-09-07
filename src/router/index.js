import { createRouter, createWebHistory } from 'vue-router'

import store  from '../store/index.js'


const childrenHomeFrame=[
    {
        path:'/course/think',
        component:()=>import('@/views/practice/think/ThinkFrame.vue'),
        name:'ThinkFrame',
        meta:{
            requireAuth:true,
        }
    },
    {
        path:'/course/hard',
        component:()=>import('@/views/practice/HomeHard.vue'),
        name:'HomeHard',
        meta:{
            requireAuth:true,
        }
    },
    {
        path:'/course/soft',
        component:()=>import('@/views/practice/HomeSoft.vue'),
        name:'HomeSoft',
        meta:{
            requireAuth:true,
        }
    },



    

    {
        path:'/test',
        component:()=>import('@/views/Test.vue'),
        name:'Test',
        meta:{
            requireAuth:true,
        }
    },

]

const routes=[

    {
        path:'/login',
        component:()=>import('@/home/LoginView.vue'),
        name:'LoginView',
        meta:{
            requireAuth:true,
        }
    },

    {
        path:'/',
        component:()=>import('@/layout/HomeFrame.vue'),
        name:'HomeFrame',
        meta:{
            requireAuth:true,
        },
        children:childrenHomeFrame
    },

    {
        path:'/Register',
        component:()=>import('@/home/Register.vue'),
        meta:{
            requireAuth:true,
        }
    }

]



const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes,
    
});

//to是跳转后的路由区域，from是跳转前的路由区域
router.beforeEach((to,from)=>{
    
    const isLogin=store.getters['User/isLogin'];

 
    if(to.path==='/login'){
        if(isLogin===true){
            
            return {name:'HomeFrame'};
        }
        return true;
    } 

    if(to.meta.requireAuth===true){
        if(isLogin===false){
            return {name:'LoginView'};
        }
        else return true;
    }
    else return true;
})
export default router;