import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import React from "react";
import defaultStyles from "../../constans/default-styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const StationScreen = (props) => {
  const { stationId, color } = props.route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0073E8",
                flex: 1,
              }}
            >
              <MaterialCommunityIcons name="parking" size={50} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View></View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0073E8",
                flex: 1,
              }}
            >
              <MaterialCommunityIcons name="parking" size={50} color="#fff" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0073E8",
                flex: 1,
              }}
            >
              <MaterialCommunityIcons name="parking" size={50} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card: {
    ...defaultStyles.shadow,
    width: "45%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 5,
    marginVertical: 10,
    overflow: "hidden",
  },
});
