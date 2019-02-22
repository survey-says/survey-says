import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { userReducer } from "./User.reducer";

export interface ILoginState {
  username: string,
  password: string
}

export interface IUserState {
  isLoggedIn: boolean
}

export interface IState {
  login: ILoginState
  user: IUserState
}

export const state = combineReducers<IState>({
  login: loginReducer,
  user: userReducer
})