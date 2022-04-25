import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RidingInfoTouch from "../../components/screens-UI/RidingInfoTouch";

const SettingsScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SettingsScreen</Text>
      {/* <RidingInfoTouch /> */}
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
