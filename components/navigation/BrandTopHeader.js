import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Colors from "../../constans/Colors";

const BrandTopHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.BBrand}>
        <Text style={styles.txtBBrand}>B</Text>
      </View>
      <Image
        source={require("../../assets/images/istei-beyaz-kirmizi.png")}
        style={styles.brandImage}
      />
      <Text style={styles.txtBrand}>STE</Text>
    </View>
  );
};

export default BrandTopHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  txtBrand: {
    fontFamily: "brand",
    fontSize: 20,
    color: Colors.primary,
  },
  BBrand: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 13,
  },
  brandImage: {
    width: 25,
    height: 25,
  },
  txtBBrand: {
    fontFamily: "brand",
    fontSize: 15,
    color: "white",
  },
});
