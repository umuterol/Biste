import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../../constans/Colors";

const TabBar = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.tab}>
          <Text>1</Text>
        </View>
        <View style={styles.tab}>
          <Text>2</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.middleTabItem}
        activeOpacity={0.9}
        onPress={() => {
          console.log("binTest");
        }}
      >
        <Text style={styles.txtBrand}>B</Text>
        <Image
          source={require("../../assets/images/istei-beyaz-siyah.png")}
          style={styles.brandImage}
        />
        <Text style={styles.txtBrand}>N</Text>
      </TouchableOpacity>
    </>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  tab: {
    backgroundColor: "gray",
  },
  middleTabItem: {
    flexDirection: "row",
    width: 80,
    height: 80,
    backgroundColor: Colors.primary,
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  brandContainer: {
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  txtBrand: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "brand",
    textAlign: "center",
  },
  brandImage: {
    width: 25,
    height: 25,
  },
});
