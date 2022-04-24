import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "content-text",
    color: "white",
    fontSize: 15,
  },
});
