import request from "@/util/Request";
export const listBoards = () => {
    return request.get( '/board/list')
};