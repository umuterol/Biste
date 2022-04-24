import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import Colors from "../constans/Colors";

const CustomBisteScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.brandContainer}>
        <View style={styles.BBrand}>
          <Text style={styles.txtBrand}>B</Text>
        </View>
        <Image
          source={require("../assets/images/istei-beyaz-siyah.png")}
          style={styles.brandImage}
        />
        <Text style={styles.txtBrand}>
          S{"\n"}T{"\n"}E
        </Text>
      </View>
      <View style={{ ...styles.contentContainer, ...props.style }}>
        {props.children}
      </View>
    </View>
  );
};

export default CustomBisteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 3,
    backgroundColor: Colors.accent,
  },
  brandContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  txtBrand: {
    fontSize: Dimensions.get("window").width / 7,
    color: "white",
    fontFamily: "brand",
    textAlign: "center",
  },
  brandImage: {
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").width / 4,
    marginTop: 5,
  },
  BBrand: {
    backgroundColor: Colors.accent,
    alignItems: "center",
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").width / 5,
    borderRadius: Dimensions.get("window").width / 5 / 2,
  },
});
