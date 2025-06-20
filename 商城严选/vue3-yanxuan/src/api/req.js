// axios的二次封装
import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  return res.data
}, error => {
  return Promise.reject(error)
})

export default service