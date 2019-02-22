import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { navReducer } from "./Nav.reducer";

export interface ILoginState {
  username: string,
  password: string
}

export interface INavState {
  isLoggedIn: boolean,
  username: string
}

export interface IState {
  login: ILoginState
  nav: INavState
}

export const state = combineReducers<IState>({
  login: loginReducer,
  nav: navReducer
})