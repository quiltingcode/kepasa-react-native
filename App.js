import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { EventsScreen } from "./src/features/screens/event.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as useRaleway,
  Raleway_400Regular,
} from "@expo-google-fonts/raleway";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [ralewayLoaded] = useRaleway({
    Raleway_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!ralewayLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <EventsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
