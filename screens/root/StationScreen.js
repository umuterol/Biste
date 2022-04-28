import { StyleSheet, View, ScrollView, Text, StatusBar } from "react-native";
import React from "react";
import StationCard from "../../components/screens-UI/StationCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import CustomBadge from "../../components/UI/CustomBadge";
import Colors from "../../constans/Colors";

const StationScreen = (props) => {
  const { stationId, color } = props.route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        showHideTransition="fade"
        backgroundColor="black"
        animated={true}
      />
      <View style={styles.summaryContainer}>
        <CustomBadge number={5}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 45,
              height: 45,
              backgroundColor: color,
              margin: 6,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontFamily: "content-text-bold",
              }}
            >
              {stationId[0].toUpperCase()}
            </Text>
          </View>
        </CustomBadge>
        <CustomBadge number={2}>
          <FontAwesome5
            name="parking"
            size={50}
            color="#026DBA"
            style={{ margin: 5 }}
          />
        </CustomBadge>
        <CustomBadge number={3}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 45,
              height: 45,
              backgroundColor: Colors.primary,
              margin: 6,
              borderRadius: 5,
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
          <StationCard color={color} name={stationId[0].toUpperCase() + 1} />
          <StationCard color={color} name={stationId[0].toUpperCase() + 2} />
          <StationCard
            color={color}
            bike
            name={stationId[0].toUpperCase() + 3}
          />
          <StationCard
            color={color}
            bike
            name={stationId[0].toUpperCase() + 4}
          />
          <StationCard color={color} name={stationId[0].toUpperCase() + 5} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
  },
});
