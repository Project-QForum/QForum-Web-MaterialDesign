import axios from "axios";
const Request = axios.create({
  baseURL: "http://127.0.0.1:8888",
  timeout: 5000,
});

Request.interceptors.request.use(config => {
  // 写你的登录后需要带的cookies 或者token
  return config;

}, error => {
  return Promise.reject(error);
});

Request.interceptors.response.use(response => {
  if(response.data.code !== 200){
   //处理错误
    return Promise.reject(response.data.message);
  }
  return response.data;
}, error => {
  return Promise.reject(error);
});
export default {

  get(url,options){
    return Request({
      url:url,
      method:"get",
      ...options
    })
  },
  post(url,options){
    return Request({
      url:url,
      method:"post",
      ...options
    })
  }

}
