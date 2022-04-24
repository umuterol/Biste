import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constans/Colors";

const CustomButton = (props) => {
  const { lineColor, color } = props;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.6}
      style={{
        ...styles.container,
        borderColor: lineColor || Colors.primary,
      }}
    >
      <Text style={{ ...styles.text, color: color || "#fff", ...props.style }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    fontFamily: "content-text-bold",
    fontSize: 18,
  },
  container: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
});
