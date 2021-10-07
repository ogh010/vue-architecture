import axios from 'axios'


axios.interceptors.request.use(
    (reqData) =>{
        console.log('interceptors.request');
        return reqData
    }
)
axios.interceptors.response.use(
    (resData) =>{
        console.log('interceptors.response');
        return resData
    }
)

export default axios