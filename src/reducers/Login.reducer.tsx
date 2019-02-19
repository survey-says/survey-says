import { ILoginState } from ".";
import { loginTypes } from '../actions/Login.actions';

const initialState: ILoginState = {
  username: 'lolo',
  password: 'pass'
}

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginTypes.LOGIN:
      return {
        ...state,
        userInfo: action.payload.userInfo
      }
  }
  return state;
}