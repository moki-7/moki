const users = [
    {
        username: 'role1',
        password: 'pass1'
    },
    {
        username: 'role2',
        password: 'pass2'
    },
    {
        username: 'role3',
        password: 'pass3'
    },
    {
        username: 'role4',
        password: 'pass4'
    },
    {
        username: '雾雨魔理沙',
        password: '12345'
    }
];


//post传递的参数在body，get传递的参数在url
//返回值opt


/*URL为'/login'的post请求*/
export const postLogin=(opt)=>{

    //console.log("拦截到login的post请求")
    //console.log(opt)

    
    //let {c}=A.b,含义为c=A.b.c
    //JSON.parse(opt.body)将 opt.body 中的字符串解析成一个 JavaScript 对象，并将其赋值给=左边的变量。
    const {username,password}=JSON.parse(opt.body);

    //从 users 数组中筛选出符合条件的元素，并将它们存储在 arr 数组中
    let arr=users.filter(el=>  el.username===username&&el.password===password);

    if(arr.length>0){

        return{
            code:200,
            msg:'login的post请求成功',
            data:{
                username,
                password,
                token:'`${username}+@kajdskajdlkfjalkdflaksjfksajdlewer8werkewferfrr`'
            }
        }

    }else{

        return{
            code:201,
            msg:'用户名或密码错误'
        }

    }

    

}


/*URL为'/register'的post请求*/
export const register=(opt)=>{
    console.log(opt)
}


/*URL为'/login'的get请求*/
export const getLogin=(opt)=>{
    console.log("拦截到login的get请求")
    console.log(opt)
    return{
        code:200,
        msg:'login的get请求成功',
        
    }
}