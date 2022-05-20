import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constans/Colors";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Wallet = () => {
  const { email } = useSelector((state) => state.auth);

  if (!email) {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <FontAwesome name="user-times" size={24} color="#fff" />
          <Text style={styles.text}> Onaylanmamış hesap</Text>
        </View>
      </View>
    );
  }

  let name = email.split(".")[0];
  name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <FontAwesome name="user" size={24} color="#fff" />
        <Text style={styles.text}> Merhaba {name}</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <SimpleLineIcons name="present" size={24} color="#fff" />
        <Text style={styles.text}>5.00</Text>
      </View>
      <Text style={{ color: "#fff", fontSize: 10 }}>
        *Burada yalnızca hediye bakiyelerin görüntülenir. Bu cüzdan için para
        çekme ve yatırma işlemleri yapılamaz.
      </Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: 150,
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: "space-around",
  },
  text: {
    color: "#fff",
    fontFamily: "content-text-bold",
    fontSize: 20,
  },
});
