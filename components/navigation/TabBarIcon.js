import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Icons from "@expo/vector-icons";
import Colors from "../../constans/Colors";

const TabBarIcon = ({ color, size, focused, iconId, iconName }) => {
  const Icon = Icons[iconId];
  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={focused ? 25 : size}
        color={focused ? Colors.primary : color}
      />
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "content-text",
  },
});
