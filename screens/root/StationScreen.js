import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import StationCard from "../../components/screens-UI/StationCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import CustomBadge from "../../components/UI/CustomBadge";
import Colors from "../../constans/Colors";
import { useSelector } from "react-redux";

const StationScreen = (props) => {
  const { stationId, color } = props.route.params;
  const selectedStation = useSelector((state) => state.stations[stationId]);
  const selectedItems = selectedStation.items;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        showHideTransition="fade"
        backgroundColor="black"
        animated={true}
      />
      <View style={styles.summaryContainer}>
        <CustomBadge number={selectedStation.itemsCount}>
          <View style={styles.countContainer}>
            <Image
              source={require("../../assets/images/kilit-noktasi.jpg")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </CustomBadge>
        <CustomBadge number={selectedStation.parkCount}>
          <FontAwesome5
            name="parking"
            size={50}
            color="#026DBA"
            style={{ margin: 5 }}
          />
        </CustomBadge>
        <CustomBadge number={selectedStation.bikeCount}>
          <View
            style={{
              ...styles.countContainer,
              backgroundColor: Colors.primary,
            }}
          >
            <MaterialCommunityIcons
              name="bicycle-basket"
              size={30}
              color="#fff"
              style={{ margin: 5 }}
            />
          </View>
        </CustomBadge>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          {selectedItems.map((item, index) => (
            <StationCard
              key={index}
              color={color}
              bike={item.bike}
              name={item.id}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
  },
  countContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    margin: 6,
    borderRadius: 5,
    overflow: "hidden",
  },
  txtStationCount: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
