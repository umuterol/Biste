import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "@expo/vector-icons";

const IconButton = (props) => {
  const Icon = Icons[props.id];
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
      activeOpacity={props.opacity}
    >
      <Icon
        name={props.name}
        size={props.size || 24}
        color={props.color || "#fff"}
      />
      {props.children}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
