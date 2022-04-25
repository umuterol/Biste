import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import * as notificationsActions from "../store/actions/notifications";
import { Ionicons } from "@expo/vector-icons";
import Notification from "../components/screens-UI/Notification";
import Colors from "../constans/Colors";

const NotificationScreen = (props) => {
  const dispatch = useDispatch();
  const { allNotifications, unreadCount } = useSelector(
    (state) => state.notifications
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(notificationsActions.markAsRead());
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.iconContainer}>
        <Ionicons
          name="notifications-circle"
          size={40}
          color={Colors.primary}
        />
      </View>
      <ScrollView style={{ marginTop: 10 }}>
        {allNotifications.map((notification) => (
          <Notification
            key={Math.random()}
            message={notification.message}
            date={notification.date}
            read={notification.read}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
