import service from '../base/Axios'
import {config} from "@/config"
export const listBoards = () => {
    return service({
        url: config.ApiUrl+'board/list',
        method: 'post'
    })
};