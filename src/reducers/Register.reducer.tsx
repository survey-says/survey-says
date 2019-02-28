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
        username: action.payload.username
      }
    case registerTypes.UPDATE_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload.firstName
      }
    case registerTypes.UPDATE_LASTNAME:
      return {
        ...state,
        lastName: action.payload.lastName
      }
    case registerTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      }
    case registerTypes.UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload.email
      }
    case registerTypes.REGISTER_SUCCESS:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        userInfo: action.payload.userInfo,
        submitted: action.payload.submitted
      }
    case registerTypes.REGISTER_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        submitted: action.payload.submitted
      }
  }
  return state;
}