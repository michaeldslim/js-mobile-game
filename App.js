import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Sound from "react-native-sound";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faStop } from "@fortawesome/free-solid-svg-icons/faStop";

export const assets = {
  backGroundImage: require("./src/assets/background.png"),
};

const startSound = new Sound("game_play.mp3", Sound.MAIN_BUNDLE);

export default function App() {
  const [startGame, setStartGame] = useState(false);

  const startGameBttn = () => {
    startSound.play();
    setStartGame(true);
  };

  const stopGameBttn = () => {
    startSound.stop();
    setStartGame(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={assets.backGroundImage}
        style={styles.background}
      />
      <View style={styles.gamePlayButton}>
        {!startGame ? (
          <TouchableOpacity onPress={startGameBttn}>
            <FontAwesomeIcon icon={faPlay} size={42} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={stopGameBttn}>
            <FontAwesomeIcon icon={faStop} size={42} />
          </TouchableOpacity>
        )}
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
  gamePlayButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 60,
    height: 60,
    marginTop: 40,
    backgroundColor: "wheat",
    borderWidth: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
