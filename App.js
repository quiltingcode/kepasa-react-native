import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { EventsScreen } from "./src/features/screens/event.screen";
import { LoginScreen } from "./src/features/screens/login.screen";
import { ProfileScreen } from "./src/features/screens/profile.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { SafeArea } from "./src/components/utils/safe-area.component";
import Ionicons from '@expo/vector-icons/Ionicons'
import { AuthProvider, useAuth } from "./src/contexts/CurrentUserContext";

import {
  useFonts as useRaleway,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_500Medium,
} from "@expo-google-fonts/oswald";
import { AddEventScreen } from "./src/features/screens/addevent.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  Add: "add-sharp",
  Profile: "person"
}
const tabBarIcon = (iconName) => ({ size, color }) => (
  <Ionicons name={iconName} size={size} color={color} />
)

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
    tabBarActiveTintColor: '#47c6e0',
    tabBarInactiveTintColor: 'gray',
  }
}

function MyTabs() {
  const { currentUser } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen name="Home" component={EventsScreen} />
      <Tab.Screen name="Add" >
        {() => (currentUser ? <AddEventScreen /> : <LoginScreen />)}
      </Tab.Screen>
      <Tab.Screen name="Profile">
        {() => (currentUser ? <ProfileScreen /> : <LoginScreen />)}
      </Tab.Screen>
    </ Tab.Navigator>
  );
}


export default function App() {



  const [ralewayLoaded] = useRaleway({
    Raleway_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_500Medium,
  });

  if (!ralewayLoaded || !latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
