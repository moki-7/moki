import axios from 'axios'
import baseConfig from './baseConfig.js'
import router from '../router/index.js'

const instance=axios.create({...baseConfig});

//设置请求拦截器,config初始值:baseConfig->instance->config
instance.interceptors.request.use(
    (config)=>{
        //对参数config配置，对用户权限进行验证
        let token= localStorage.getItem("plat_token");
        //发送请求时携带token
        if(token){
            config.headers.token = token;
        }else{
            router.push('/login');
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);

//设置响应拦截器
instance.interceptors.response.use(
    (response)=>{
        //对响应response进行分析，解套
        if(response.data.code>=200){
            return response.data;
        }else if(response.data.code===-1){
            //token失效，或者用户名错误
            router.push('/login');
        }else{
            //函数会拒绝该Promise，并传递response.data对象
            //调用该函数的代码可以捕获并处理这个错误
            return Promise.reject(response.data);
        }
    },
    (error)=>{
        return Promise.reject(error);
    }
);

//export default 语法用于导出模块的默认内容。一个模块只能有一个默认导出。
//导出后，其他模块可以不使用花括号 {}，直接通过导入的名字引用这个默认导出。
export default instance;