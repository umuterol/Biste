import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconBadge from "react-native-icon-badge";
import Colors from "../../constans/Colors";

const CustomBadge = ({ children, bgColor, number, color }) => {
  return (
    <IconBadge
      MainElement={children}
      BadgeElement={
        <Text style={{ ...styles.text, color: color || '#fff' }}>
          {number}
        </Text>
      }
      IconBadgeStyle={{
        width: 20,
        height: 20,
        backgroundColor: bgColor || '#ff4444',
      }}
    />
  );
};

export default CustomBadge;

const styles = StyleSheet.create({
  text: {
    fontFamily: "content-text-bold",
    color: "#fff",
  },
});
