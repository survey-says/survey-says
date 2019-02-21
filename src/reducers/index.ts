import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";

export interface ILoginState {
  username: string,
  password: string
}

export interface IState {
  login: ILoginState
}
export const state = combineReducers<IState>({
  login: loginReducer,
})