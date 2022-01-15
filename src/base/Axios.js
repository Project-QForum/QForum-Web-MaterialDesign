import axios from "axios";
import {getErrorMsg} from "@/util/ErrorUtil";
axios.interceptors.response.use(
    response => {
        if (response && response.data) {
            let data = response.data || {}
            if (data && (data['code'] === 403)) {
                data["errorMsg"] = getErrorMsg(data["error"]);
            }
        }
        return response
    },
    (err) => {
        console.error('Axios Response 请求出错：', err)
        let res = {
            code:403,
            error: '请求失败，请重试。'
        }
        return Promise.resolve(res)
    }
)
export default axios