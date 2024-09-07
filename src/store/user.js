export default{
    namespaced:true,

    //这些数据在网页刷新后会丢失，所以需要存储到本地
    //使用localStorage存储token
    //使用vuex的state存储用户信息 
    state:{
        token:'',
        userInfor:{
            username:'',
            password:''
        }
    },

    getters:{
        getToken(state){
            return state.token;
        },
        getUserName(state){
            return state.userInfor.username;
        },
        isLogin(state) {
            return !!state.token || !!localStorage.getItem('plat_token');
        }
        
    },

    mutations:{
        setToken(state,token){
            state.token=token;
            localStorage.setItem('plat_token',token); 
        },
        clearToken(state) {
            state.token = '';
            localStorage.removeItem('plat_token');
           
        },        
        setUserName(state,username){
            state.userInfor.username=username;
        }
    },

    actions:{},

    modules:{}
}