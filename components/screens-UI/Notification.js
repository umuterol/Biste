import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Notification = (props) => {
  return (
    <View>
      <View
        style={{
          ...styles.contentContainer,
          backgroundColor: props.read ? null : "rgba(0, 0, 255, 0.1)",
        }}
      >
        <Text style={styles.text}>{props.message}</Text>
        <Text style={styles.txtDate}>{props.date}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
  text: {
    fontFamily: "content-text",
    marginTop: 5,
  },
  txtDate: {
    fontFamily: "content-text",
    color: "#888",
    marginTop: 5,
  },
  divider: {
    borderTopWidth: 1,
    opacity: 0.2,
  },
});
