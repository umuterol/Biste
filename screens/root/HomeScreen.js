import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Colors from "../../constans/Colors";
import Station from "../../components/screens-UI/Station";

const HomeScreen = (props) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.stationContainer}>
        <Station
          iconId="MaterialIcons"
          iconName="local-dining"
          title="Yemekhane"
          style={styles.stationDiningHall}
          noBike
          noPark
          onPress={() => {}}
        />
        <Station
          iconId="Entypo"
          iconName="open-book"
          title="Kütüphane"
          style={styles.stationLibrary}
          noBike
          noPark
          onPress={() => {}}
        />
        <Station
          iconId="FontAwesome5"
          iconName="hotel"
          title="KYK"
          style={styles.stationKyk}
          noBike
          noPark
          onPress={() => {}}
        />
        <Station
          iconId="FontAwesome5"
          iconName="university"
          title="Giriş"
          style={styles.stationDoor}
          noBike
          noPark
          onPress={() => {}}
        />
        <Station
          iconId="MaterialIcons"
          iconName="engineering"
          title="Mühendislik"
          style={styles.stationEngineering}
          noBike
          noPark
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  stationContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.accent,
  },
  stationDiningHall: {
    borderBottomRightRadius: 500,
    backgroundColor: "#DE0C20",
  },
  stationLibrary: {
    borderBottomLeftRadius: 500,
    backgroundColor: "orange",
  },
  stationKyk: {
    borderTopRightRadius: 500,
    backgroundColor: "#102139",
  },
  stationDoor: {
    borderTopLeftRadius: 500,
    backgroundColor: Colors.primary,
  },
  stationEngineering: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    zIndex: 0,
    elevation: 0,
    backgroundColor: Colors.accent,
  },
});
