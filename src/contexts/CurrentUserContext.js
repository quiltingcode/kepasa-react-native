import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { axiosReq, axiosRes } from "../api/axios";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Function to check and set the current user
    const loadUser = async () => {
        const accessToken = await AsyncStorage.getItem("access_token");
        console.log("🛠️ Access Token:", accessToken);

        if (accessToken) {
            try {
                const tokenData = jwt_decode(accessToken);
                console.log("📜 Decoded Token:", tokenData);
                const userId = tokenData.user_id;

                const { data } = await axiosRes.get(`api/auth/v1/login/${userId}/`);
                console.log("✅ User Data from API:", data);

                setCurrentUser(data);
            } catch (err) {
                console.error("❌ Error fetching user:", err);
                logout();
            }
        } else {
            console.log("🚫 No access token found.");
        }
    };


    // Login function
    const login = async (email, password) => {
        try {
            const { data } = await axiosReq.post("api/token/", { email, password });
            await AsyncStorage.setItem("access_token", data.access);
            await AsyncStorage.setItem("refresh_token", data.refresh);

            loadUser();
        } catch (err) {
            console.error("Login failed", err);
        }
    };

    // Logout function
    const logout = async () => {
        await AsyncStorage.removeItem("access_token");
        await AsyncStorage.removeItem("refresh_token");
        setCurrentUser(null);
    };

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};