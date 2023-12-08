import axios from "axios";
import {base_urls} from "../BaseUrl";
import {ILoginResponse, IRefreshResponse} from "../auth/dataSource/ILoginDataSource";
import {refresh} from "../auth/actionCreators/authActionCreator";
import {useAppDispatch} from "../../../../shared/helpers/hooks/redux";

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
    config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`;
    return config;
});
mainInstance.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401
            && originalRequest.url !== LOGIN_TOKEN_URL
        ) {
            return userInstance.post('user/refresh', {refreshToken :sessionStorage.getItem('refreshToken')})
                .then((response) => {
                    const newToken = response.data.token
                    sessionStorage.setItem('token', newToken);
                    sessionStorage.setItem('refreshToken', response.data.refreshToken);

                    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return mainInstance(originalRequest);
                })
                .catch((refreshError) => {
                    console.error('Token refresh failed:', refreshError);
                    return Promise.reject(refreshError);
                });
}})


export const axiosInstance = {
    user: userInstance,
    main: mainInstance
}
