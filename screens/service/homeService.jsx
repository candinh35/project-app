const { default: apiClient } = require("./api.service")

const homeService = {
    async getPaged(data) {
        return await apiClient.post('home/list', data)
        .then((response) => {
            return response;
        })
    }
}

export default homeService;