import Mock from "mockjs"
import * as Login from "./mockLogin.js"
import * as Think from "./mockThink.js"

Mock.setup({
    timeout:1000
})

/*URL为'/login'的post请求*/
Mock.mock(/\/login/, 'post', (opt)=>{
    return Login.postLogin(opt)
});

/*URL为'/register'的post请求*/
Mock.mock(/\/register/, 'post', (opt)=>{
    return Login.register(opt)
});

/*URL为'/login'的get请求*/
Mock.mock(/\/login/, 'get', (opt)=>{
    return Login.getLogin(opt)
});

Mock.mock(/\/think\/options/,'get',
    (opt)=>Think.getOptions(opt)
);

Mock.mock(/\/think\/queryQuestions/,
    'get',
    (opt)=>Think.getQueryQuestions(opt)
);

Mock.mock(/\/think\/deleteQuestions/,
    'post',
    (opt)=>Think.deleteQuestions(opt)
);