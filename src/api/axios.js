import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = 'https://happening-api-kelz.herokuapp.com/';

const axiosReq = axios.create({
    baseURL: API_URL,
});

const axiosRes = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Function to add token to requests
const addAuthHeader = async (config) => {
    const accessToken = await AsyncStorage.getItem("access_token");
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
};

// Add interceptors for requests
axiosReq.interceptors.request.use(addAuthHeader, (err) => Promise.reject(err));

axiosRes.interceptors.request.use(addAuthHeader, (err) => Promise.reject(err));

// Refresh token logic if request fails with 401
axiosRes.interceptors.response.use(
    (response) => response,
    async (err) => {
        if (err.response?.status === 401) {
            try {
                const refreshToken = await AsyncStorage.getItem("refresh_token");
                if (!refreshToken) throw new Error("No refresh token found");

                const response = await axios.post(`${API_URL}api/token/refresh/`, {
                    refresh: refreshToken,
                });

                const newAccessToken = response.data.access;
                await AsyncStorage.setItem("access_token", newAccessToken);

                // Retry the failed request with the new token
                err.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axiosRes(err.config);
            } catch (error) {
                await AsyncStorage.removeItem("access_token");
                await AsyncStorage.removeItem("refresh_token");
            }
        }
        return Promise.reject(err);
    }
);

export { axiosReq, axiosRes };