import { StyleSheet, Text, View } from "react-native";
import React from "react";
import defaultStyles from "../../constans/default-styles";

const Card = (props) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    ...defaultStyles.shadow,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});
