import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

type gameBordSquareState = 1 | -1 | 0;

export type SanmokuSquare = {
  squareState: gameBordSquareState;
  squarePosition: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  handlePressSquare: (presedPosition: number) => void;
};

function SanmokuSquare({
  handlePressSquare,
  squareState,
  squarePosition,
}: SanmokuSquare) {
  return (
    <Pressable
      onPress={() => {
        handlePressSquare(squarePosition);
      }}
      style={styles.boxContainer}
    >
      {squareState !== 0 && (
        <Image
          style={{ width: 90, height: 90 }}
          source={
            squareState === 1
              ? require("./img/maru.png")
              : require("./img/batsu.png")
          }
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 100,
  },
});

export default SanmokuSquare;
