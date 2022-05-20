import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../constans/Colors";
import defaultStyles from "../../constans/default-styles";

const BinButton = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>B</Text>
      <Image
        source={require("../../assets/images/istei.png")}
        style={styles.image}
      />
      <Text style={styles.text}>N</Text>
    </View>
  );
};

export default BinButton;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    overflow: "hidden",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.primary,
    ...defaultStyles.shadow,
  },
  text: {
    fontFamily: "brand",
    color: Colors.primary,
    fontSize: 17,
  },
  image: {
    width: 40,
    height: 40,
  },
});
