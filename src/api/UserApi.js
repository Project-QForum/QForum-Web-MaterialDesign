import service from '../base/Axios'
import {config} from "@/config"

export const LOGIN_URL="/user/login"


export const login = (userName, password) => {
    return service({
        url: config.ApiUrl + 'user/login',
        method: 'post',
        params: {
            userName: userName,
            password: password
        }
    })
}, checkLogin = (sessionId) => {
    return service({
        url: config.ApiUrl + 'user/checkLogin',
        method: 'post',
        params: {
            sessionId: sessionId
        }
    })
}, getProfile = (id,userName) => {
    return service({
        url: config.ApiUrl + 'user/getProfile',
        method: 'post',
        params: {
            id:id,
            userName:userName
        }
    })
}, register = (email,userName,password) => {
    return service({
        url: config.ApiUrl + 'user/register',
        method: 'post',
        params: {
            email:email,
            userName:userName,
            password:password
        }
    })
};
