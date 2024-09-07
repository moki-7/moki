import {createStore} from 'vuex'
import User from './user.js'

export default createStore({
    state:{
        token:'',
        userInfor:{
        }
    },
    getters:{},
    mutations:{},
    actions:{},
    modules:{User,}
});

