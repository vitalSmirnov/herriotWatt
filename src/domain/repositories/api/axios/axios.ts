import axios from "axios";
import {base_urls} from "../BaseUrl";

const LOGIN_TOKEN_URL = `${base_urls.user}/user/login`
const REFRESH_TOKEN_URL = `${base_urls.user}/user/refresh`

const userInstance = axios.create({
    baseURL: base_urls.user,
});
userInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

const mainInstance = axios.create({
    baseURL: base_urls.main,
});
mainInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});


export const axiosInstance = {
    user: userInstance,
    main: mainInstance
}
