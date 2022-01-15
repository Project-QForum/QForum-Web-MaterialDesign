import service from '../base/Axios'
import {config} from "@/config"
export const getForumInfo = () => {
    return service({
        url: config.ApiUrl+'forum/info',
        method: 'post'
    })
};