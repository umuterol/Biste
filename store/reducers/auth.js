import { SEND_SMS, WRONG_CODE , AUTHENTICATE } from "../actions/auth";

const initialState = {
  phoneNumber: null,
  verificationCode: null,
  numberOfWrong: 0,
  token: null,
  email: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_SMS:
      return {
        ...initialState,
        phoneNumber: action.value.phoneNumber,
        verificationCode: action.value.verificationCode,
      };
    case WRONG_CODE:
      return {
        ...state,
        numberOfWrong: +state.numberOfWrong + 1,
      };
      case AUTHENTICATE:
        return{
          ...initialState,
          phoneNumber:action.value.phoneNumber,
          token:action.value.token,
          email:action.value.email
        }
    default:
      return state;
  }
};
