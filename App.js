import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export const ImageAssets = {
  backGroundImage: require("./src/assets/background.png"),
};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={ImageAssets.backGroundImage}
        resizeMode="cover"
        style={styles.background}
      />
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
});
