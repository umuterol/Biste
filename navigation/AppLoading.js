import React, { useState, useEffect } from "react";
import Navigation from "./";
import LottieView from "lottie-react-native";
import { useFonts } from "expo-font";
import { useDispatch } from "react-redux";
import * as stationsActions from "../store/actions/stations";
import * as notificationsActions from "../store/actions/notifications";
import * as authActions from "../store/actions/auth";
import Colors from "../constans/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage'

const AppLoading = () => {
  const [appLoaded, setAppLoaded] = useState();
  const [stationsLoaded, setStationsLoaded] = useState();
  const [notificationsLoaded, setNotificationsLoaded] = useState();
  const [initialRouteName,setInitialRouteName] = useState('Auth');
  const [fontLoaded] = useFonts({
    brand: require("../assets/fonts/PermanentMarker-Regular.ttf"),
    "content-text": require("../assets/fonts/OpenSans-Regular.ttf"),
    "content-text-bold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });
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
      const userData = await AsyncStorage.getItem('userData');
      console.log(userData)
      if(userData){
        setInitialRouteName('App')
        const {phoneNumber,token,email} = userData;
        dispatch(authActions.authenticate(phoneNumber,token,email))
      }
      setAppLoaded(true);
    }
  }, [fontLoaded, stationsLoaded , notificationsLoaded]);

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
