import React from "react";
import { StyleSheet, Text } from "react-native";

export type GameStatusProps = {
  turnCount: number;
  gameState: 1 | -1 | 0;
  isBlackTurn: boolean;
};

function GameStatus({ turnCount, gameState, isBlackTurn }: GameStatusProps) {
  let gameStatusMessage = "";
  if (gameState === 0) {
    if (turnCount === 10) {
      gameStatusMessage = "引き分けです。";
    } else {
      gameStatusMessage = `${
        isBlackTurn === true ? "先手" : "後手"
      }の手番です。`;
    }
  } else {
    gameStatusMessage = `${gameState === 1 ? "先手" : "後手"}の勝利です。`;
  }
  return <Text>{gameStatusMessage}</Text>;
}

export default GameStatus;
