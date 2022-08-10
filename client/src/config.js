import axios from "axios";


export const axiosInstance = axios.create({
    baseURL : "https://giangblog1.herokuapp.com/api/"
})