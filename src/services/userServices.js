import userApi from "../utils/axiosConfig"

const register = async (data) => {
    try {
        return await userApi.post('/register', { data })
    } catch (error) {
        throw error
    }
}

const login = async (values) => {
    try {
        return await userApi.post('/login', values)
    } catch (error) {
        throw error
    }
}

const shorten = async (values) => {
    try {
        const userData = JSON.parse(localStorage.getItem("userDetails"));
        values.userId = userData._id
        return await userApi.post('/shorten', values)
    } catch (error) {
        throw error
    }
}

const getUserUrls = async (userId) => {
    try {
        return await userApi.get(`/urls?userId=${userId}`)
    } catch (error) {
        throw error
    }
}

export { register, login, shorten, getUserUrls }