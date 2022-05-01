import { StyleSheet, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import CustomBisteScreen from "../../components/CustomBisteScreen";
import CustomText from "../../components/UI/CustomText";
import PhoneInput from "../../components/UI/PhoneInput";
import CustomButton from "../../components/UI/CustomButton";
import CustomLoading from "../../components/UI/CustomLoading";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

const LoginScreen = (props) => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert(null, error, [{ text: "kapat", style: "default" }]);
      setError(null);
    }
  }, [error]);

  const onChangeHandler = (text, isValid) => {
    setIsValidPhone(isValid);
    setPhoneNumber(text);
  };

  const sendSmsHandler = async () => {
    if (!isValidPhone) {
      setError("Lütfen telefon numaranızı kontrol edip tekrar deneyin.");
      return;
    }

    setIsLoading(true);
    setTimeout(async () => {
      try {
        await dispatch(authActions.sendSms(phoneNumber));
        props.navigation.navigate("VerificationCodeScreen");
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <CustomBisteScreen>
        <View style={styles.container}>
          <CustomText style={styles.text}>
            *Giriş yapmak için cep telefon numaranızı girin.
          </CustomText>
          <PhoneInput onChangeText={onChangeHandler} />
          <View style={styles.actionContainer}>
            <CustomButton
              lineColor="#ccc"
              style={styles.btn}
              onPress={sendSmsHandler}
            >
              SMS Gönder
            </CustomButton>
          </View>
        </View>
      </CustomBisteScreen>
      {isLoading && <CustomLoading />}
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    marginBottom: "30%",
  },
  text: {
    fontSize: 14,
    marginBottom: 20,
  },
  actionContainer: {
    marginTop: 20,
    shadowColor: "black",
    alignItems: "center",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
