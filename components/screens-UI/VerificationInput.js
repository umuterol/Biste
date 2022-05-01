import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../UI/CustomButton";
import Colors from "../../constans/Colors";

const msConvert = (ms) => {
  if (ms <= 0) {
    return {
      minute: 0,
      second: 0,
      stringCounter: "00:00",
    };
  }
  const second = (ms / 1000) % 60;
  const minute = parseInt(ms / 1000 / 60);
  let stringCounter = "0" + minute + ":";
  if (second < 10) {
    stringCounter += "0" + second;
  } else {
    stringCounter += second;
  }
  return {
    minute,
    second,
    stringCounter,
  };
};

let counterInterval;
const VerificationInput = (props) => {
  
  const [number, setNumber] = useState("");
  const [counter, setCounter] = useState(1000 * 60 * 1);
  const [tryVisible, setTryVisible] = useState(false);

  const clearCounterInterval = () => {
    clearInterval(counterInterval);
  };

  useEffect(() => {
    const cleanedNumber = number.replace(/[^\d]/g, "");
    const isValid = cleanedNumber.length === 6;
    props.onChangeText(cleanedNumber, isValid);
  }, [number]);

  useEffect(() => {
    if (counter <= 0) {
      clearCounterInterval();
      setTryVisible(true);
    }
  }, [counter]);

  useEffect(() => {
    if (!tryVisible) {
      counterInterval = setInterval(() => {
        if (counter > 0) {
          console.log("test counter interval");
          setCounter((prevCounter) => prevCounter - 1000);
        }
      }, 1000);
    }

    return () => {
      clearCounterInterval();
    };
  }, [tryVisible]);

  const onChangeHandler = (text) => {
    text = text.replace(/[^-\d]/g, "");
    const cleanedText = text.replace(/[^\d]/g, "");
    const clsLength = cleanedText.length;

    if (clsLength === 0) {
      setNumber("");
    } else if (clsLength === 1 || clsLength === 2 || clsLength === 3) {
      setNumber(cleanedText);
    } else if (clsLength === 4 || clsLength === 5 || clsLength === 6) {
      setNumber(cleanedText.substr(0, 3) + "-" + cleanedText.substr(3));
    }
  };

  const sendSmsHandler = () => {
    setTryVisible(false);
    setCounter(1000 * 60 * 3);
    //try send code
    props.trySendSms();
  };

  return (
    <View>
      {tryVisible && (
        <View style={styles.actionContainer}>
          <CustomButton
            style={{ fontSize: 15 }}
            lineColor={Colors.accent}
            onPress={sendSmsHandler}
          >
            Tekrar Gönder.
          </CustomButton>
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={number}
          onChangeText={onChangeHandler}
          maxLength={7}
          placeholder="Güvenlik kodu"
          autoCorrect={false}
          autoComplete="off"
        />
        <View style={styles.counter}>
          <Text>{msConvert(counter).stringCounter}</Text>
        </View>
      </View>
    </View>
  );
};

export default VerificationInput;

const styles = StyleSheet.create({
  input: {
    width: "70%",
    padding: 5,
    fontSize: 17,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    overflow: "hidden",
    borderRadius: 5,
    borderBottomColor: "green",
    borderBottomWidth: 5,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  counter: {
    width: "30%",
    alignItems: "flex-end",
  },
  actionContainer: {
    alignItems: "flex-end",
  },
});
