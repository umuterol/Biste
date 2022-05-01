import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import Card from "../UI/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StationName = (props) => (
  <Card
    style={{
      ...styles.stationnameCard,
      borderColor: props.color,
    }}
  >
    <View style={styles.stationnameContainer}>
      <Text style={{ ...styles.txtStationname, color: props.color }}>
        {props.name}
      </Text>
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
            fontSize: 14,
            color: "#fff",
          }}
        >
          Fiyat/dk
        </Text>
        <Text style={{ fontFamily: "content-text", color: "#fff" }}>
          ₺{props.bike.price.toFixed(2)}
        </Text>
      </View>
      <View style={styles.divider} />
      <ImageBackground
        source={{ uri: "https://i.ytimg.com/vi/kijnzf_2Sqs/sddefault.jpg" }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.txtBikeId}>{props.bike.id}</Text>
      </ImageBackground>
    </View>
  </View>
);

const ParkContent = () => (
  <View style={styles.parkContainer}>
    <MaterialCommunityIcons
      name="car-brake-parking"
      size={75}
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
    width: "45%",
    maxWidth: 250,
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#000",
  },
  card: {
    width: "90%",
    height: 150,
  },
  stationnameCard: {
    width: 75,
    height: 75,
    position: "absolute",
    top: -10,
    left: -10,
    borderWidth: 2,
    borderBottomRightRadius: 100,
  },
  txtStationname: {
    color: "#000",
    fontFamily: "content-text-bold",
    fontSize: 20,
  },
  stationnameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bikeContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  txtBikeId: {
    fontSize: 10,
    fontFamily: "content-text",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
  },
  bikeInfos: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  divider: {
    height: "100%",
    backgroundColor: "#ccc",
    width: 1,
  },
  parkContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
});
