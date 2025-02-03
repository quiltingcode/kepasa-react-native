import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/CurrentUserContext";

export const AddEventScreen = () => {
    const { currentUser } = useAuth();
    const navigation = useNavigation();

    useEffect(() => {
        if (!currentUser) {
            navigation.replace("Login"); // Redirect to Login if not logged in
        }
    }, [currentUser]);

    return (
        <View>
            <Text>Let's create a new event, {currentUser?.username}!</Text>
        </View>
    );
};