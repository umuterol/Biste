import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import IconButton from "../components/UI/IconButton";
import CustomButton from "../components/UI/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import * as rideActions from "../store/actions/ride";
import Colors from "../constans/Colors";

const distanceTime = (startingDate) => {
  const totalMS = new Date().getTime() - startingDate.getTime();
  const totalS = totalMS / 1000;
  const second = parseInt(totalS % 60);
  const minute = parseInt(totalS / 60);

  let stringTime = minute + ":";
  if (second < 10) stringTime += "0" + second;
  else stringTime += second;

  return {
    minute,
    second,
    stringTime,
  };
};

const Ride = () => {
  const { bikeId, price, startingDate } = useSelector((state) => state.ride);
  const [rideTime, setRideTime] = useState(distanceTime(startingDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setRideTime(distanceTime(startingDate));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.centered}>
      <BikeContent bikeId={bikeId} price={price} />
      <Text style={styles.text}>
        {((rideTime.minute + 1) * price).toFixed(2)}₺
      </Text>
      <Text style={{ ...styles.text, marginTop: 5 }}>
        {rideTime.stringTime}
      </Text>
    </View>
  );
};

const StartingRide = () => {
  const dispatch = useDispatch();

  const startHandler = () => {
    dispatch(rideActions.startingRide());
  };

  return (
    <View style={styles.centered}>
      <View style={styles.inputContainer}>
        <Text style={{ color: "#888", fontSize: 20 }}>#</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="characters"
          maxLength={4}
        />
      </View>
      <CustomButton onPress={startHandler}>SÜRÜŞÜ BAŞLAT</CustomButton>
    </View>
  );
};

const RidingScreen = (props) => {
  const ride = useSelector((state) => state.ride);

  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        id="FontAwesome"
        name="close"
        size={40}
        onPress={() => props.navigation.goBack()}
        style={styles.btnClose}
      />
      {ride.bikeId ? <Ride /> : <StartingRide />}
    </SafeAreaView>
  );
};

export default RidingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  btnClose: {
    position: "absolute",
    top: StatusBar.currentHeight + 20,
    right: 20,
  },
  text: {
    fontFamily: "content-text-bold",
    color: "#fff",
    fontSize: 25,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 20,
    borderBottomWidth: 3,
    borderBottomColor: Colors.primary,
  },
  input: {
    padding: 10,
    width: "90%",
  },
});

const BikeContent = (props) => (
  <View
    style={{
      padding: 20,
      justifyContent: "flex-end",
      marginVertical: 20,
      width:200
    }}
  >
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
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
          ₺{props.price.toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          height: "100%",
          backgroundColor: "#ccc",
          width: 1,
        }}
      />
      <ImageBackground
        source={{ uri: "https://i.ytimg.com/vi/kijnzf_2Sqs/sddefault.jpg" }}
        resizeMode="cover"
        style={{
          width: 50,
          height: 50,
          borderRadius: 5,
          overflow: "hidden",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontFamily: "content-text",
            textAlign: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "#fff",
          }}
        >
          {props.bikeId}
        </Text>
      </ImageBackground>
    </View>
  </View>
);
