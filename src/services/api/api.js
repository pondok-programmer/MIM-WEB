import axios from "axios";
const instance = axios.create({
    baseURL: 'http://mim.muhammadiyahexpo.com/api'
})

export default instance