import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../components/UI/IconButton";

const RidingScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        id="FontAwesome"
        name="close"
        size={40}
        onPress={() => props.navigation.goBack()}
        style={styles.btnClose}
      />

      <Text
        style={{
          fontFamily: "content-text-bold",
          color: "#fff",
          fontSize: 25,
        }}
      >
        12:28
      </Text>
      <Text
        style={{
          fontFamily: "content-text-bold",
          color: "#fff",
          fontSize: 25,
        }}
      >
        7₺
      </Text>
    </SafeAreaView>
  );
};

export default RidingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: "center",
    justifyContent: "center",
  },
  btnClose: {
    position: "absolute",
    top: StatusBar.currentHeight + 20,
    right: 20,
  },
});
