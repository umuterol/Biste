import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import IconButton from "../UI/IconButton";


const Station = (props) => {
  let WarningComponent = null;
  if (props.noPark && props.noBike)
    WarningComponent = <Text style={styles.txtWarning}>out of service</Text>;
  else if (props.noPark)
    WarningComponent = (
      <MaterialCommunityIcons
        name="car-brake-parking"
        size={24}
        color="black"
      />
    );
  else if (props.noBike)
    WarningComponent = (
      <MaterialCommunityIcons name="bicycle-basket" size={24} color="black" />
    );

  return (
    <IconButton
      id={props.iconId}
      name={props.iconName}
      style={[styles.station, props.style]}
      onPress={props.onPress}
      opacity={0.7}
    >
      <Text style={styles.textStation}>{props.title}</Text>
      {props.noPark || props.noBike ? (
        <View style={styles.warningContainer}>
          {WarningComponent}
          <View style={styles.closeIcon}>
            <AntDesign name="closecircle" size={15} color="red" />
          </View>
        </View>
      ) : null}
    </IconButton>
  );
};

export default Station;

const styles = StyleSheet.create({
  station: {
    width: "50%",
    height: Dimensions.get("window").height / 2,
    padding: 10,
  },
  warningContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  textStation: {
    color: "#fff",
    fontFamily: "brand",
    fontSize: 20,
  },
  closeIcon: { position: "absolute", top: 0, right: 0 },
  txtWarning: {
    fontFamily: "content-text",
  },
});
