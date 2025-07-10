import axios from 'axios'

console.log("url",process.env.REACT_APP_USER_API_BASE_URL);

const userApi = axios.create({
    baseURL: process.env.REACT_APP_USER_API_BASE_URL,
    withCredentials: true
})

export default userApi
