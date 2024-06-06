import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from "react-native";
import EventsPage from "./src/pages/EventsPage";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <EventsPage />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  search: {
    padding: 16,
    backgroundColor: "yellow"
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue"
  }
});
