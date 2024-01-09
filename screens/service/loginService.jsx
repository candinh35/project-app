const { default: apiClient } = require("./api.service")

const loginService = {
    async login(data) {
        return await apiClient.post('auth/login', data)
        .then((response) => {
            return response;
        })
    },
    async register(data) {
        return await apiClient.post('auth/register', data)
        .then((response) => {
            return response;
        })
    }
}

export default loginService;