import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import Colors from "../../constans/Colors";

const CustomLoading = () => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <ActivityIndicator size="large" color={"#fff"} />
    </View>
  );
};

export default CustomLoading;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1,
    elevation: 5, //android zindex
  },
});
