import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import useMainStore from "@/stores/module/main";

const mainStore  = useMainStore()

class NzRequest {

  // 设置basrURL和timeout 
  constructor(baseURL, timeout = 10000) {
    this.baseURL = axios.create({
      baseURL,
      timeout
    })

    this.baseURL.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    },err => {
      return err
    })
    this.baseURL.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    },err => {
      mainStore.isLoading = false
      return err
    })

  }

  // 封装request
  request(config) {
    return new Promise((resolve, reject) => {
      this.baseURL.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  
  get(config) {
    return this.request({...config, method: "get"})
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}



export default new NzRequest(BASE_URL, TIMEOUT)