import instance from './instance.js'
//封装与后端 API 的 HTTP 请求，使用叫 instance 的 HTTP 客户端来与服务器通信
//主要用于从服务器获取一些选项、模块和章节的数据

//通过 GET 请求从服务器的/think/options 接口获取数据
//通常这种请求用于加载某些选项数据
export const options=()=>{
    return instance({
        method:'get',
        url:'/think/options'
    })
}
 

export const queryQuestion=(value)=>{
    //有效的URL为/think/queryQuestions
    return instance({
        method:'get',
        url:`/think/queryQuestions?LMC=${value}`,
    })
}

export const deleteQuestion=(value)=>{
    //第一步:使用 instanceof Array 对形参value进行判断,数值还是数组
    //是数组,data 将直接被赋值为 value
    //不是数组,data 将被赋值为 [value],即将 value 包裹在一个数组中
    let data=(value instanceof Array)?value:[value];
    //通过instance发送请求
    let url='';
    return instance({
        url:'/think/deleteQuestions',
        method:'post',
        data:data
    })
}