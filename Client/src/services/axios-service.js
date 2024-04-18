import axios from "axios";
import configJSON from "../../config.json"
import {refreshToken} from "../handlers/authorization-handler.js";

const url = configJSON.axios.ServerUrl || "http://localhost:3001/api"
const api = axios.create({
    withCredentials:true,
    baseURL: url
})

api.interceptors.response.use((config) =>{
    if (
        (
        config.config.url === `/authorization/register` ||
        config.config.url === `/authorization/login`    ||
        config.config.url === `/authorization/refresh`
        ) &&
        config.status === 200
    ){
        localStorage.setItem('access',config.data.tokens.access)
    }
    return config;
},(error)=>{
    console.log(error)
    return error
})
api.interceptors.request.use((config) =>{
    config.headers.Authorization = `${localStorage.getItem('access')}`

    return config;

},async error => {
    if (error.response.status === 406){
        await refreshToken()
    }
    return error;
})

export default api