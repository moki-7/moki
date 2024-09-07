import instance from './instance'

export const login=(data)=>{
    return instance({
        method:'post',
        url:'/login',
        data:data
    })
}

export const register=(data)=>{
    return instance({
        method:'post',
        url:'/register',
        data:data
    })
}