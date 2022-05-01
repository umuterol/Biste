import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Wallet from "../../components/screens-UI/Wallet";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Wallet />
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
