import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Wallet from "../../components/screens-UI/Wallet";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Colors from "../../constans/Colors";
import { useDispatch, useSelector } from "react-redux";
import * as authActions from "../../store/actions/auth";
import CustomBadge from "../../components/UI/CustomBadge";

const ListItem = (props) => (
  <TouchableOpacity style={styles.listItem} onPress={props.onPress}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{width:30}}>{props.Icon}</View>
      <Text style={styles.text}> {props.children}</Text>
    </View>
    <AntDesign name="right" size={20} color={Colors.primary} />
  </TouchableOpacity>
);

const Logout = (props) => (
  <TouchableOpacity style={styles.logoutContainer} onPress={props.onPress}>
    <Text style={{ ...styles.text, fontSize: 15 }}>ÇIKIŞ YAP </Text>
    <MaterialCommunityIcons name="logout" size={20} color={Colors.primary} />
  </TouchableOpacity>
);

const SettingsScreen = (props) => {
  const { unreadCount } = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, marginTop: 20 }}>
        <Wallet />
        <View style={styles.list}>
          <ListItem
            Icon={<Ionicons name="contract" size={25} color={Colors.primary} />}
          >
            Üyelik sözleşmesi
          </ListItem>
          <View style={styles.divider} />
          <ListItem
            Icon={
              <MaterialCommunityIcons
                name="file-hidden"
                size={25}
                color={Colors.primary}
              />
            }
          >
            Gizlilik ilkeleri
          </ListItem>
          <View style={styles.divider} />
          <ListItem
            Icon={
              <Ionicons name="information" size={25} color={Colors.primary} />
            }
          >
            Kullanım talimatları
          </ListItem>
          <View style={styles.divider} />
          <ListItem
            Icon={
              <FontAwesome
                name="drivers-license-o"
                size={20}
                color={Colors.primary}
              />
            }
          >
            Kimlik doğrulama
          </ListItem>
          <View style={styles.divider} />
          <ListItem
            Icon={
              <MaterialCommunityIcons
                name="map-marker-distance"
                size={25}
                color={Colors.primary}
              />
            }
          >
            Sürüşlerim
          </ListItem>
          <View style={styles.divider} />
          <ListItem
            Icon={
              <Ionicons name="card-outline" size={25} color={Colors.primary} />
            }
          >
            Kartlarım
          </ListItem>
          <View style={styles.divider} />
          <ListItem
            Icon={
              <SimpleLineIcons
                name="present"
                size={25}
                color={Colors.primary}
              />
            }
          >
            Promosyonlar
          </ListItem>
        </View>
        <Logout onPress={logoutHandler} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#fff",
    marginVertical: 20,
    borderRadius: 5,
  },
  listItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "content-text-bold",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
  },
  logoutContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginVertical:25,
  },
});
