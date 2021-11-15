import React from "react";
import { StyleSheet, View } from "react-native";
import SanmokuSquare from "./SanmokuSquare";

type gameBordSquareState = 1 | -1 | 0;

export type SanmokuBoradProps = {
  gameBord: gameBordSquareState[];
  handlePressSquare: (presedPosition: number) => void;
};

function SanmokuBoard({ gameBord, handlePressSquare }: SanmokuBoradProps) {
  return (
    <View style={styles.container}>
      <View style={styles.gameBoradRow}>
        <SanmokuSquare
          squarePosition={0}
          squareState={gameBord[0]}
          handlePressSquare={handlePressSquare}
        />
        <SanmokuSquare
          squarePosition={1}
          squareState={gameBord[1]}
          handlePressSquare={handlePressSquare}
        />
        <SanmokuSquare
          squarePosition={2}
          squareState={gameBord[2]}
          handlePressSquare={handlePressSquare}
        />
      </View>
      <View style={styles.gameBoradRow}>
        <SanmokuSquare
          squarePosition={3}
          squareState={gameBord[3]}
          handlePressSquare={handlePressSquare}
        />
        <SanmokuSquare
          squarePosition={4}
          squareState={gameBord[4]}
          handlePressSquare={handlePressSquare}
        />
        <SanmokuSquare
          squarePosition={5}
          squareState={gameBord[5]}
          handlePressSquare={handlePressSquare}
        />
      </View>
      <View style={styles.gameBoradRow}>
        <SanmokuSquare
          squarePosition={6}
          squareState={gameBord[6]}
          handlePressSquare={handlePressSquare}
        />
        <SanmokuSquare
          squarePosition={7}
          squareState={gameBord[7]}
          handlePressSquare={handlePressSquare}
        />
        <SanmokuSquare
          squarePosition={8}
          squareState={gameBord[8]}
          handlePressSquare={handlePressSquare}
        />
      </View>
    </View>
  );
}

export default SanmokuBoard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#000",
    borderTopWidth: 1,
    borderTopColor: "#000",
  },
  gameBoradRow: {
    flexDirection: "row",
  },
});
