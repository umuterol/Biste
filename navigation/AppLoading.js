import React, { useState, useEffect } from "react";
import Navigation from "./";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import * as stationsActions from "../store/actions/stations";
import * as notificationsActions from "../store/actions/notifications";
import * as authActions from "../store/actions/auth";
import * as rideActions from "../store/actions/ride";
import Colors from "../constans/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppLoading = () => {
  const [appLoaded, setAppLoaded] = useState();
  const [stationsLoaded, setStationsLoaded] = useState();
  const [notificationsLoaded, setNotificationsLoaded] = useState();
  const [initialRouteName, setInitialRouteName] = useState("Auth");
  const [fontLoaded] = useFonts({
    brand: require("../assets/fonts/PermanentMarker-Regular.ttf"),
    "content-text": require("../assets/fonts/OpenSans-Regular.ttf"),
    "content-text-bold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });
  const ride = useSelector((state) => state.ride);
  const dispatch = useDispatch();

  useEffect(async () => {
    setTimeout(async () => {
      await dispatch(stationsActions.fetchStations());
      setStationsLoaded(true);
      await dispatch(notificationsActions.fetchNotifications());
      setNotificationsLoaded(true);
    }, 1000);
  }, []);

  useEffect(async () => {
    if (fontLoaded && stationsLoaded && notificationsLoaded) {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        setInitialRouteName("App");
        const { phoneNumber, token, email } = JSON.parse(userData);
        console.log(phoneNumber, token, email);
        dispatch(authActions.authenticate(phoneNumber, token, email));
      }
      setAppLoaded(true);
    }
  }, [fontLoaded, stationsLoaded, notificationsLoaded]);

  //test ride
  useEffect(() => {
    const rideInterval = setInterval(async () => {
      if (!ride.bikeId) {
        return;
      };
      const response = await fetch(
        "https://kilit-96ecd-default-rtdb.firebaseio.com/M1.json"
      );
      
      const data = await response.json();
        console.log(data)
      if(!data)
      dispatch(rideActions.finishedRide());
 
    }, 1000);
    return () => {
       clearInterval(rideInterval);
    }
  }, [ride]);

  if (!appLoaded) {
    return (
      <LottieView
        source={require("../assets/animated/animated-loader.json")}
        autoPlay
        loop
        style={{ backgroundColor: Colors.primary }}
      />
    );
  }

  return <Navigation initialRouteName={initialRouteName} />;
};

export default AppLoading;
