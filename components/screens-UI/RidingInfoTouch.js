import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import Draggable from "react-native-draggable";

const RidingInfoTouch = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <Draggable
      x={width - 80}
      y={200}
      minX={width - 80}
      minY={0}
      maxX={width}
      maxY={height - 20}
      onShortPressRelease={() => navigation.navigate("RidingScreen")}
      // debug
    >
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "http://www.melodika.com.tr/bower_components/Ionicons/png/512/android-clock.png",
          }}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.text} lineBreakMode="clip" numberOfLines={1}>
            1 Gün
          </Text>
          <Text style={styles.text} lineBreakMode="clip" numberOfLines={1}>
            23:52:27
          </Text>
          <Text style={styles.text} lineBreakMode="clip" numberOfLines={1}>
            17₺
          </Text>
        </ImageBackground>
      </View>
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
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#000000c0",
    backgroundColor: "rgba(0, 0, 0,0.3)",
  },
  text: {
    fontSize: 10,
    fontFamily: "content-text-bold",
    color: "#fff",
  },
});
