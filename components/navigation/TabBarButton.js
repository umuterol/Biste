import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import defaultStyles from "../../constans/default-styles";
import Colors from "../../constans/Colors";


const TabBarButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.btn}>{props.children}</View>
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    top: -10,
    alignItems: "center",
    justifyContent: "center",
    ...defaultStyles.shadow,
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: Colors.primary,
  },
});
