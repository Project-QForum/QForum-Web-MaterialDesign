import request from "@/util/Request";
export const listThreads = (boardId) => {
    return request.get("/thread/list",{
        params:{
            boardId:boardId
        }
    })
};
export const getThreadDetail = (threadId) => {
    return request.get("/thread/getThreadDetail",{
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
    return request.post("/thread/post",{
        data: formData
    })
};
export const likeThread = (token,tid) => {
    return request.get("/thread/like",{
        params:{
            tid:tid,
            token:token,
            type:0
        }
    })
};
export const disLikeThread = (token,tid) => {
    return request.get("/thread/like",{
        params:{
            tid:tid,
            token:token,
            type:1
        }
    })
};