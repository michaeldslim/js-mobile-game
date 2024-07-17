import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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

const GAME_DURATION_SEC = 20;

const startSound = new Sound("game_play.mp3", Sound.MAIN_BUNDLE);

let timer = () => {};

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SEC);

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    if (startGame) {
      startTimer();
      return () => clearTimeout(timer);
    }
  }, [startGame, timer]);

  const startGameBttn = () => {
    startSound.play();
    startSound.setVolume(1);
    setStartGame(true);

    setTimeLeft(GAME_DURATION_SEC);
    clearTimeout(timer);
    startTimer();
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
      <View style={styles.gameTimer}>
        <Text style={{ fontSize: 32 }}>{timeLeft}</Text>
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
  gameTimer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 100,
    marginTop: 110,
    backgroundColor: "white",
    borderWidth: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
