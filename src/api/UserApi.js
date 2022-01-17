import request from "@/util/Request"

export const LOGIN_URL="/user/login"


export const login = (userName, password) => {
    return request.get( '/user/login',{
        params: {
            userName: userName,
            password: password
        }
    })
}, checkLogin = (token) => {
    return request.get( '/user/checkLogin',{
        params: {
            token:token
        }
    })
}, getProfile = (id,userName) => {
    return request.post( '/user/getProfile',{
        params: {
            id:id,
            userName:userName
        }
    })
}, register = (email,userName,password) => {
    return request.post( '/user/register',{
        params: {
            email:email,
            userName:userName,
            password:password
        }
    })
};
