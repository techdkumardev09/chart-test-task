import axios from "axios";

axios.interceptors.request.use(
    config => {
        const token = ''
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        const responseData = response.data
        if (Object.keys(responseData)[0] === "Error Message" || Object.keys(responseData)[0] === "Information") {
            return ({ error: { key: Object.keys(responseData)[0], message: responseData[Object.keys(responseData)[0]] } })
        }
        if (Object.keys(responseData).length) {
            return responseData
        } else {
            return ({ error: { key: '', message: 'No Data to show' } })
        }
    },
    function (error) {
        return ({ error })
    }
)

export default axios