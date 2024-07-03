import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { EventsScreen } from "./src/features/screens/event.screen";

export default function App() {
  return (
    <>
      <EventsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
