import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { userInfo } from 'os';

export interface ILoginState {
  username: string,
  password: string,
  userInfo: {},
  errorMessage: string
}

export interface IState {
  login: ILoginState
}
export const state = combineReducers<IState>({
  login: loginReducer,
})