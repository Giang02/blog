import axios from "axios";


export const axiosInstance = axios.create({
    baseURL : "https://giang-blog-test.herokuapp.com/api/"
})