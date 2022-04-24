import { StyleSheet, StatusBar, View, Text } from "react-native";
import React, { useState } from "react";
import CustomBisteScreen from "../../components/CustomBisteScreen";
import CustomText from "../../components/UI/CustomText";
import IconButton from "../../components/UI/IconButton";
import VerificationInput from "../../components/screens-UI/VerificationInput";
import CustomLoading from "../../components/UI/CustomLoading";
import Colors from "../../constans/Colors";

const VerificationCodeScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      props.navigation.reset({
        index: 0,
        routes: [{ name: "App" }],
      });
    }, 2000);
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
          <VerificationInput />
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
