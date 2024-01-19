import axios from 'axios'

const request = axios.create({
    baseURL: "http://127.0.0.1:9000"
})
   // baseURL: import.meta.env.VITE_API_URL

export default  request