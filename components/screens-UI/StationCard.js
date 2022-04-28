import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import React from "react";
import Card from "../UI/Card";
import BinButton from "./BinButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StationName = (props) => (
  <Card
    style={{
      ...styles.stationnameCard,
      borderColor: props.color,
    }}
  >
    <View style={styles.stationnameContainer}>
      <Text style={{ ...styles.txtStationname, color: props.color }}>{props.name}</Text>
    </View>
  </Card>
);

const BikeContent = (props) => (
  <View style={styles.bikeContainer}>
    <View style={styles.bikeInfos}>
      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={{
            fontFamily: "content-text-bold",
            fontSize: 17,
            color: "#fff",
          }}
        >
          Fiyat/dk
        </Text>
        <Text style={{ fontFamily: "content-text", color: "#fff" }}>0.25₺</Text>
      </View>
      <View style={styles.divider} />
      <ImageBackground
        source={{ uri: "https://i.ytimg.com/vi/kijnzf_2Sqs/sddefault.jpg" }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.txtBikeId}>#C132</Text>
      </ImageBackground>
    </View>
    <BinButton />
  </View>
);

const ParkContent = () => (
  <View style={styles.parkContainer}>
    <MaterialCommunityIcons
      name="car-brake-parking"
      size={100}
      color="#026DBA"
    />
  </View>
);

const StationCard = (props) => {
  return (
    <View style={styles.container}>
      <Card
        style={{
          ...styles.card,
          backgroundColor: props.color,
        }}
      >
        <StationName {...props} />
        {props.bike ? <BikeContent {...props} /> : <ParkContent />}
      </Card>
    </View>
  );
};

export default StationCard;

const styles = StyleSheet.create({
  container: {
    width: 350,
    maxWidth: "90%",
    minWidth: "80%",
    height: 250,
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: "#000",
  },
  card: {
    width: 300,
    maxWidth: "90%",
    minWidth: "85%",
    height: 200,
  },
  stationnameCard: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 125,
    left: -50,
    borderWidth: 2,
    borderBottomRightRadius: 100,
  },
  txtStationname: {
    color: "#000",
    fontFamily: "content-text-bold",
    fontSize: 30,
  },
  stationnameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bikeContainer: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  txtBikeId: {
    fontFamily: "content-text",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
  },
  bikeInfos: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
  },
  divider: {
    height: "100%",
    backgroundColor: "#ccc",
    width: 0.5,
  },
  parkContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});
