import { ILoginState } from ".";
import { loginTypes } from '../actions/Login.actions';

const initialState: ILoginState = {
  username: '',
  password: '',
  errorMessage: '',
  userInfo: {}
}

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginTypes.LOGIN_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        errorMessage: action.payload.errorMessage
      }
    case loginTypes.PASSWORD_UPDATE:
      return {
        ...state,
        password: action.payload.password
      }
    case loginTypes.USERNAME_UPDATE:
      return {
        ...state,
        username: action.payload.username
      }
    case loginTypes.LOGOUT:
      return {
        ...state,
        userInfo: {}
      }
  }
  return state;
}