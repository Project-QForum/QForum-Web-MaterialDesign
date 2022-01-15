export const getErrorMsg = (errorName)=>{
    switch (errorName){
        case "no_such_user":
            return "用户不存在";
        case "username_already_exists":
            return "用户名已被占用";
        case "username_cannot_contain_at":
            return "用户名不能包含@"
        case "email_already_exists":
            return "邮箱已被占用";
        case "unknown":
            return "未知";
        case "title_cannot_be_empty":
            return "标题不能为空";
        default:
            return "未收录错误，错误码："+errorName
    }
}