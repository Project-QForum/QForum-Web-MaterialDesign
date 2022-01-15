import service from '../base/Axios'
import {config} from "@/config"
export const listThreads = (boardId) => {
    return service({
        url: config.ApiUrl+'thread/list',
        method: 'post',
        params:{
            boardId:boardId
        }
    })
};
export const getThreadDetail = (threadId) => {
    return service({
        url: config.ApiUrl+'thread/getThreadDetail',
        method: 'post',
        params:{
            id:threadId
        }
    })
};
export const postThread = (sessionId,boardId,title,content) => {
    let formData = new FormData;
    formData.append("sessionId",sessionId);
    formData.append("boardId",boardId);
    formData.append("title",title);
    formData.append("content",content);
    return service({
        url: config.ApiUrl+'thread/post',
        method: 'post',
        data:formData
    })
};
export const likeThread = (sessionId,tid) => {
    return service({
        url: config.ApiUrl+'thread/like',
        method: 'post',
        params:{
            tid:tid,
            sessionId:sessionId,
            type:0
        }
    })
};
export const disLikeThread = (sessionId,tid) => {
    return service({
        url: config.ApiUrl+'thread/like',
        method: 'post',
        params:{
            tid:tid,
            sessionId:sessionId,
            type:1
        }
    })
};