import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../../constans/Colors";

const PhoneInput = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const cleanedPhoneNumber = phoneNumber.replace(/[^\d]/g, "");
    const isValid = cleanedPhoneNumber.length === 10;
    props.onChangeText(cleanedPhoneNumber, isValid);
  }, [phoneNumber]);

  const onChangeHandler = (text) => {
    text = text.replace(/[^() \d]/g, "");
    const cleanedText = text.replace(/[^\d]/g, "");

    const clsLength = cleanedText.length;
    if (clsLength === 0) {
      setPhoneNumber(cleanedText);
    } else if (clsLength === 1 || clsLength === 2 || clsLength === 3) {
      setPhoneNumber("(" + cleanedText);
    } else if (clsLength === 4 || clsLength === 5 || clsLength === 6) {
      setPhoneNumber(
        "(" + cleanedText.substr(0, 3) + ") " + cleanedText.substr(3)
      );
    } else if (clsLength === 7 || clsLength === 8) {
      setPhoneNumber(
        "(" +
          cleanedText.substr(0, 3) +
          ") " +
          cleanedText.substr(3, 3) +
          " " +
          cleanedText.substr(6)
      );
    } else if (clsLength === 9 || clsLength === 10) {
      setPhoneNumber(
        "(" +
          cleanedText.substr(0, 3) +
          ") " +
          cleanedText.substr(3, 3) +
          " " +
          cleanedText.substr(6, 2) +
          " " +
          cleanedText.substr(8)
      );
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.txtCountry}>+90</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={phoneNumber}
        onChangeText={onChangeHandler}
        maxLength={15}
        placeholder="Cep Telefonu"
        autoCorrect={false}
        autoComplete="off"
      />
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 5,
    fontSize: 17,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    overflow: "hidden",
    borderRadius: 5,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 5,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  txtCountry: {
    fontSize: 16,
    color: "#888",
  },
});
