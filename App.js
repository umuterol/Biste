import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import notificationsReducers from "./store/reducers/notifications";
import stationsReducers from "./store/reducers/stations";
import authReducers from "./store/reducers/auth";
import AppLoading from "./navigation/AppLoading";

const rootReducer = combineReducers({
  notifications: notificationsReducers,
  stations: stationsReducers,
  auth: authReducers,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <AppLoading />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </Provider>
  );
}
