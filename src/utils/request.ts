import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
// baseURL: import.meta.env.VITE_API_URL

export default request
