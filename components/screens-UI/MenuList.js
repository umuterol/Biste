import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constans/Colors";
import defaultStyles from "../../constans/default-styles";

const MenuList = (props) => {
  return (
    <View style={styles.list}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("")}
      >
        <View style={styles.listItem}>
          <Text style={styles.text}>Sürüşlerim</Text>
          <View style={styles.icon}>
            <MaterialIcons
              name="history-toggle-off"
              size={24}
              color={Colors.primary}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("")}
      >
        <View style={styles.listItem}>
          <Text style={styles.text}>Bisikletlerim</Text>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="bicycle-basket"
              size={25}
              color={Colors.primary}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate("")}
      >
        <View style={styles.listItem}>
          <Text style={styles.text}>Bisiklet ekle</Text>
          <View style={styles.icon}>
            <MaterialIcons
              name="hourglass-empty"
              size={25}
              color={Colors.primary}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    margin: 20,
    backgroundColor:'#fff',
    borderRadius:10,
    ...defaultStyles.shadow
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    paddingVertical:10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderBottomWidth:1,
    
  },
  icon: {},
  text: {
    fontFamily: "content-text",
    fontSize: 17,
  },
});
