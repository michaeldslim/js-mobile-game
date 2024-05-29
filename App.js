import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

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
      <View style={styles.gameButton}>
        <FontAwesomeIcon icon={faPlay} size={42} />
      </View>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
  background: {
    flex: 1,
  },
  gameButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    marginTop: 20,
    backgroundColor: "wheat",
    borderWidth: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
