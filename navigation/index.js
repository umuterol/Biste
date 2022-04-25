import React, { useEffect } from "react";
import RidingInfoTouch from "../components/screens-UI/RidingInfoTouch";
import Colors from "../constans/Colors";
import Screens from "./screens";
import TabBarIcon from "../components/navigation/TabBarIcon";
import TabBarButton from "../components/navigation/TabBarButton";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import * as notificationsActions from "../store/actions/notifications";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoginScreen" component={Screens.LoginScreen} />
    <Stack.Screen
      name="VerificationCodeScreen"
      component={Screens.VerificationCodeScreen}
    />
  </Stack.Navigator>
);

const RootStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
    <Stack.Screen
      name="StationScreen"
      component={Screens.StationScreen}
      options={({ route }) => ({
        headerShown: true,
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff", fontFamily: "brand" },
        title: route.params.stationId,
        headerStyle: { backgroundColor: route.params.color },
        headerTitleAlign: "center",
        headerShadowVisible: false,
      })}
    />
  </Stack.Navigator>
);

const SettingsStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
      headerStyle: { backgroundColor: Colors.accent },
      headerTitleStyle: { color: "#fff", fontFamily: "content-text-bold" },
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="SettingsScreen"
      component={Screens.SettingsScreen}
      options={{ title: "Ayarlar", headerShown: false }}
    />
    <Stack.Screen
      name="AuthenticationScreen"
      component={Screens.AuthenticationScreen}
      options={{ headerTitle: "Authentication" }}
    />
    <Stack.Screen
      name="ConfidentialityAgreementScreen"
      component={Screens.ConfidentialityAgreementScreen}
      options={{ headerTitle: "Confidentiality Agreement" }}
    />
    <Stack.Screen
      name="MembershipAgreementScreen"
      component={Screens.MembershipAgreementScreen}
      options={{ headerTitle: "Membership Agreement" }}
    />
    <Stack.Screen
      name="MyCardsScreen"
      component={Screens.MyCardsScreen}
      options={{ headerTitle: "My Cards" }}
    />
    <Stack.Screen
      name="MyRidesScreen"
      component={Screens.MyRidesScreen}
      options={{ headerTitle: "My Rides" }}
    />
    <Stack.Screen
      name="RulesScreen"
      component={Screens.RulesScreen}
      options={{ headerTitle: "Rules" }}
    />
  </Stack.Navigator>
);

const AppTabNavigator = (props) => {
  const { unreadCount } = useSelector((state) => state.notifications);
  return (
    <>
      <RidingInfoTouch {...props} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
        initialRouteName="RootStackNavigator"
      >
        <Tab.Screen
          name="NotificationScreen"
          component={Screens.NotificationScreen}
          options={{
            tabBarIcon: (props) => (
              <TabBarIcon
                {...props}
                size={30}
                iconId="Ionicons"
                iconName="notifications-outline"
              />
            ),
            tabBarBadge: unreadCount || null,
          }}
        />
        <Tab.Screen
          name="RootStackNavigator"
          component={RootStackNavigator}
          options={{
            tabBarIcon: (props) => (
              <Ionicons name="home" size={30} color="#fff" />
            ),
            tabBarButton: (props) => <TabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name="SettingsStackNavigator"
          component={SettingsStackNavigator}
          options={{
            tabBarIcon: (props) => (
              <TabBarIcon
                {...props}
                size={30}
                iconId="Ionicons"
                iconName="options"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notificationsActions.fetchNotifications());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="App"
      >
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
        <Stack.Screen name="App" component={AppTabNavigator} />
        <Stack.Screen
          name="RidingScreen"
          component={Screens.RidingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
