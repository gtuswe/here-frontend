import axios from 'axios';
import store from '../redux/store';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const state = store.getState();
        config.headers = { ...config.headers, Authorization: `Bearer ${state.authReducer.accessToken || ''}` };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
