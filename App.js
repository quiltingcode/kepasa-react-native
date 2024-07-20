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
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_500Medium,
} from "@expo-google-fonts/oswald";

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
        <EventsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
