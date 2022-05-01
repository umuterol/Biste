import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Draggable from "react-native-draggable";
import Colors from "../../constans/Colors";
import BinButton from "./BinButton";

const RidingInfoTouch = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <Draggable
      x={width - 80}
      y={height / 2 - 80}
      minX={width - 80}
      minY={0}
      maxX={width}
      maxY={height - 20}
      onShortPressRelease={() => navigation.navigate("RidingScreen")}
      // debug
    >
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
          <Text style={styles.text} lineBreakMode="clip" numberOfLines={1}>
            1 Gün
          </Text>
          <Text style={styles.text} lineBreakMode="clip" numberOfLines={1}>
            23:52:27
          </Text>
        </View>
        <Text style={styles.text} lineBreakMode="clip" numberOfLines={1}>
          17₺
        </Text>
      </View>
      {/* <BinButton /> */}
    </Draggable>
  );
};

export default RidingInfoTouch;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0,0.3)",
    borderColor: Colors.accent,
    borderWidth: 1,
  },
  text: {
    fontSize: 13,
    fontFamily: "content-text-bold",
    color: "#fff",
  },
});
