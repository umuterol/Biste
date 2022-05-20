import AsyncStorage from "@react-native-async-storage/async-storage";

export const SEND_SMS = "SEND_SMS";
export const WRONG_CODE = "WRONG_CODE";
export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";

export const sendSms = (phoneNumber) => {
  return async (dispatch) => {
    //request api
    // code ...

    dispatch({
      type: SEND_SMS,
      value: { phoneNumber, verificationCode: "000000" },
    });
  };
};

export const trySendSms = () => {
  return async (dispatch, getState) => {
    //request api
    // code ...
    const { phoneNumber } = getState().auth;
    dispatch(sendSms(phoneNumber));
  };
};

export const authenticate = (phoneNumber, token, email) => {
  return {
    type: AUTHENTICATE,
    value: {
      phoneNumber,
      token,
      email,
    },
  };
};

export const logout = () => {
  AsyncStorage.clear();
  return {
    type: LOGOUT,
  };
};

export const login = (enteredCode) => {
  return async (dispatch, getState) => {
    try {
      //request api
      // code ...
      const { auth } = getState();
      const result = auth.verificationCode === enteredCode;

      if (auth.numberOfWrong >= 5) {
        throw new Error("Deneme sayısını aştınız.Yeni kod alın.");
      }

      if (!result) {
        dispatch({
          type: WRONG_CODE,
        });
        throw new Error("hatalı kod.");
      }

      dispatch(
        authenticate(
          auth.phoneNumber,
          "fffxafUmutEROLfasda",
          "umuterol.mdbf18@iste.edu.tr",
        )
      );
      storeData({
        phoneNumber: auth.phoneNumber,
        email: "umuterol.mdbf18@iste.edu.tr",
        token: "fffxafUmutEROLfasda",
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("userData", jsonValue);
  } catch (e) {
    // saving error
    throw new Error(e.message);
  }
};
