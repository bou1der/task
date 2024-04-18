import api from "../services/axios-service.js";
import conf from "../../config.json"

const RequestHandler = async (method,url,data,config) =>{
    switch (method){
        case "get":{
            await api.get(url,config || {}).then((content) =>{
                console.log(content)
            })
            break;
        }
        case "post":{
            await api.post(url,data || {}, config || {}).then((content) =>{
                console.log(content)
            })
            break;
        }
    }
}
const refreshToken = async ()=>{
    api.get(`${conf.axios.ServerUrl}/authorization/refresh`,{withCredentials:true})
}
const logout = () =>{
    api.post('/auth/logout')
    .catch(err => {
        console.log(err)
    })
    localStorage.removeItem('token')
}
export {RequestHandler,refreshToken,logout}