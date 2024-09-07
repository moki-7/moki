import { createApp } from "vue";
import App from "./App.vue";
//import './style.css'
import * as ElIcons from "@element-plus/icons-vue";

import './mockjs/index.js'
import store from "./store/index.js";
import router from "@/router/index.js"

//js文件不能用use...


const xapp=createApp(App);
//for循环遍历数组,A[i],for(auto i in A)
//component 将每个组件全局注册到 Vue 应用中
for (const name in ElIcons) {
    xapp.component(name, ElIcons[name]);
}

xapp.use(router).use(store).mount('#app');