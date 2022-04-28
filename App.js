import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Navigation from "./navigation";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import notificationsReducers from "./store/reducers/notifications";
import Colors from "./constans/Colors";


const rootReducer = combineReducers({
  notifications: notificationsReducers,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [testLoading, setTestLoading] = useState(true);
  const [loaded] = useFonts({
    brand: require("./assets/fonts/PermanentMarker-Regular.ttf"),
    "content-text": require("./assets/fonts/OpenSans-Regular.ttf"),
    "content-text-bold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      setTestLoading(false);
    }, 3000);
  }, []);

  if (testLoading || !loaded) {
    return (
      <LottieView
        source={require("./assets/animated/animated-loader.json")}
        autoPlay
        loop
        style={{ backgroundColor: Colors.primary }}
      />
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
}