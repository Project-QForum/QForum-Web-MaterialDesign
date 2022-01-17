import request from "@/util/Request";
export const getForumInfo = () => {
    return request.get( '/forum/info')
};