import { StyleSheet, StatusBar, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import CustomBisteScreen from "../../components/CustomBisteScreen";
import CustomText from "../../components/UI/CustomText";
import IconButton from "../../components/UI/IconButton";
import VerificationInput from "../../components/screens-UI/VerificationInput";
import CustomLoading from "../../components/UI/CustomLoading";
import Colors from "../../constans/Colors";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

const VerificationCodeScreen = (props) => {
  const [code, setCode] = useState();
  const [isValidCode, setIsValidCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert(null, error, [{ text: "kapat" }]);
      setError(null);
    }
  }, [error]);

  const onChangeHandler = (text, isValid) => {
    setIsValidCode(isValid);
    setCode(text);
  };

  const trySendSmsHandler = async () => {
    setIsLoading(true);
    try {
      await dispatch(authActions.trySendSms());
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const submitHandler = async () => {
    if (!isValidCode) {
      setError("Lütfen güvenlik kodunuzu kontrol edip tekrar deneyin.");
      return;
    }
    setIsLoading(true);
    setTimeout(async () => {
      try {
        await dispatch(authActions.login(code));
        //because before navigation reset
        setIsLoading(false);
        props.navigation.reset({
          index: 0,
          routes: [{ name: "App" }],
        });
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      <CustomBisteScreen>
        <View style={styles.container}>
          <View style={styles.backIconContainer}>
            <IconButton
              id="Ionicons"
              name="chevron-back-outline"
              size={30}
              onPress={() => props.navigation.goBack()}
            />
          </View>
          <CustomText style={styles.text}>
            *Sms ile gelen tek kullanımlık güvenlik kodunu girin.
          </CustomText>
          <VerificationInput
            onChangeText={onChangeHandler}
            trySendSms={trySendSmsHandler}
          />
          <View style={styles.actionContainer}>
            <IconButton
              id="Ionicons"
              name="chevron-forward-circle-sharp"
              size={60}
              color={Colors.primary}
              onPress={submitHandler}
            />
          </View>
        </View>
      </CustomBisteScreen>
      {isLoading && <CustomLoading />}
    </>
  );
};

export default VerificationCodeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginBottom: 20,
  },
  backIconContainer: {
    top: StatusBar.currentHeight,
    left: 10,
    position: "absolute",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    marginBottom: "30%",
  },
  actionContainer: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  txtAction: {
    fontFamily: "content-text-bold",
    color: "#fff",
    fontSize: 17,
    marginRight: 2,
  },
});
