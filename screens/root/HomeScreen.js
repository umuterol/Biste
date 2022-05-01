import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import Colors from "../../constans/Colors";
import Station from "../../components/screens-UI/Station";
import { useSelector } from "react-redux";

const HomeScreen = (props) => {
  const stations = useSelector((state) => state.stations);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.stationContainer}>
          <Station
            iconId="MaterialIcons"
            iconName="local-dining"
            title="Yemekhane"
            style={styles.stationDiningHall}
            noBike={stations["yemekhane"].bikeCount === 0 ? true : false}
            noPark={stations["yemekhane"].parkCount === 0 ? true : false}
            onPress={() =>
              props.navigation.navigate("StationScreen", {
                stationId: "yemekhane",
                color: "#DE0C20",
              })
            }
          />
          <Station
            iconId="Entypo"
            iconName="open-book"
            title="Kütüphane"
            style={styles.stationLibrary}
            noBike={stations["kutuphane"].bikeCount === 0 ? true : false}
            noPark={stations["kutuphane"].parkCount === 0 ? true : false}
            onPress={() =>
              props.navigation.navigate("StationScreen", {
                stationId: "kutuphane",
                color: "#FF7F00",
              })
            }
          />
          <Station
            iconId="FontAwesome5"
            iconName="hotel"
            title="KYK"
            style={styles.stationKyk}
            noBike={stations["kyk"].bikeCount === 0 ? true : false}
            noPark={stations["kyk"].parkCount === 0 ? true : false}
            onPress={() =>
              props.navigation.navigate("StationScreen", {
                stationId: "kyk",
                color: "#102139",
              })
            }
          />
          <Station
            iconId="FontAwesome5"
            iconName="university"
            title="Giriş"
            style={styles.stationDoor}
            noBike={stations["giris"].bikeCount === 0 ? true : false}
            noPark={stations["giris"].parkCount === 0 ? true : false}
            onPress={() =>
              props.navigation.navigate("StationScreen", {
                stationId: "giris",
                color: Colors.primary,
              })
            }
          />
          <Station
            iconId="MaterialIcons"
            iconName="engineering"
            title="Mühendislik"
            style={styles.stationEngineering}
            noBike={stations["muhendislik"].bikeCount === 0 ? true : false}
            noPark={stations["muhendislik"].parkCount === 0 ? true : false}
            onPress={() =>
              props.navigation.navigate("StationScreen", {
                stationId: "muhendislik",
                color: Colors.accent,
              })
            }
          />
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: "#FF7F00",
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
