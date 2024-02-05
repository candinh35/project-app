const { default: apiClient } = require("./api.service")

const homeService = {
    async getPaged(data) {
        console.log(data);
        return await apiClient.get('product/list',{ params: data })
        .then((response) => {
            return response;
        })
    }
}

export default homeService;