import { IRegisterState } from '.';
import { registerTypes } from '../actions/Register.actions';

const initialState: IRegisterState = {
  userInfo: {},
  errorMessage: '',
  submitted: false
}

export const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case registerTypes.UPDATE_FIELD:
      return {
        ...state,
        userInfo: action.payload.userInfo
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
    default:
      break;
  }
}