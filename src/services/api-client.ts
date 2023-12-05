import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a01d1c25242940b0bc362dba014160c3'
    }
})