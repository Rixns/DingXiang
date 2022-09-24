import axios from "axios";
import base from "./base";

const api = {
    getCovInfo() {
        return axios.get(base.host + base.CovInfo)
    },
    getChinaData() {
        return axios.get(base.baseUrl + base.chinaData)
    }
}

export default api