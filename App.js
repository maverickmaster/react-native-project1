import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>

      <View style={styles.titleContainer}>
        <Text style={styles.text}>Milton is here now!</Text>

        <Text
          style={{
            fontStyle: "italic",
            fontSize: 68,
            textAlign: "center",
            color: "red",
          }}
        >
          Hello World!
        </Text>

        <StatusBar style="auto" />
      </View>

      <View style={styles.fillerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "grey",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  fillerContainer: {
    padding: 10,
    backgroundColor: "blue",
    flex: 0.25,
    width: "50%",
  },

  titleContainer: {
    backgroundColor: "orange",
    width: "100%",
    padding: 10,
    margin: 10,
    flex: 0.5,
    justifyContent: "center",
    borderRadius: 20,
  },
});
