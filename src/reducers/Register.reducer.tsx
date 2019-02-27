import { IRegisterState } from '.';
import { registerTypes } from '../actions/Register.actions';

const initialState: IRegisterState = {
  username: '',
  password: '',
  email: '',
  firstName: '',
  lastName: '',
  userInfo: {},
  errorMessage: '',
  submitted: false
}

export const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case registerTypes.UPDATE_USERNAME:
      return {
        ...state,
        userInfo: action.payload.username
      }
    case registerTypes.UPDATE_FIRSTNAME:
      return {
        ...state,
        userInfo: action.payload.firstname
      }
    case registerTypes.UPDATE_LASTNAME:
      return {
        ...state,
        userInfo: action.payload.lastname
      }
    case registerTypes.UPDATE_PASSWORD:
      return {
        ...state,
        userInfo: action.payload.password
      }
    case registerTypes.UPDATE_EMAIL:
      return {
        ...state,
        userInfo: action.payload.email
      }
    case registerTypes.REGISTER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.userInfo
      }
    case registerTypes.REGISTER_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
  }
  return state;
}