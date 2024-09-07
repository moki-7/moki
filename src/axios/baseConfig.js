const baseConfig={

    method: 'post', 
    //基础URL。当你发起请求时，所有的相对URL都会基于这个基础URL来生成最终的请求地址。例如，axios.get('/api/data') 实际会请求 http://localhost:8081/api/data。
    baseURL: 'http://localhost:8081', 
    //请求头中设置了Content-Type为application/json，表示你发送和接受的数据格式是JSON格式。charset=UTF-8说明你发送的文本编码是UTF-8。
    headers: {
        'Content-Type': 'application/json; charset=UTF-8' 
    },
    // 请求超时时间为10秒
    timeout: 10000, 
    // 跨域请求时发送cookie,携带凭证
    withCredentials: true, 
    // 设置响应类型为JSON,返回数据类型
    responseType: 'json' 
}
export default baseConfig;