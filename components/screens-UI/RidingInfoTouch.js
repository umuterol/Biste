import { StyleSheet, Text, View, Dimensions } from "react-native";
import React , {useState,useEffect} from "react";
import Draggable from "react-native-draggable";
import Colors from "../../constans/Colors";
import BinButton from "./BinButton";
import { useSelector } from "react-redux";

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

const RideInfo = () => {
  const {bikeId,price,startingDate}=useSelector(state => state.ride);
  const [rideTime,setRideTime] = useState(distanceTime(startingDate));

  
  useEffect(()=>{
    const interval = setInterval(() => {
      setRideTime(distanceTime(startingDate))
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  },[])

  return <View style={styles.container}>
    <View style={{ alignItems: "center" }}>
      <Text style={styles.text} lineBreakMode="clip" numberOfLines={1}>
        {rideTime.stringTime}
      </Text>
    </View>
  </View>;
};

const RidingInfoTouch = ({ navigation }) => {
  const ride = useSelector((state) => state.ride);
  const { width, height } = Dimensions.get("window");

  return (
    <Draggable
      x={width - 80}
      y={height / 2 - 80}
      minX={width - 80}
      minY={0}
      maxX={width}
      maxY={height - 20}
      onShortPressRelease={() => navigation.navigate("RidingScreen")}
      // debug
    >
      {ride.bikeId ? <RideInfo /> : <BinButton />}
    </Draggable>
  );
};

export default RidingInfoTouch;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0,0.3)",
    borderColor: Colors.accent,
    borderWidth: 1,
  },
  text: {
    fontSize: 17,
    fontFamily: "content-text-bold",
    color: "#fff",
  },
});
