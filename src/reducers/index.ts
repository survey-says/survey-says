import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { navReducer } from "./Nav.reducer";
import { userInfo } from 'os';

export interface ILoginState {
  username: string,
  password: string,
  userInfo: {},
  errorMessage: string
}

export interface INavState {
  isLoggedIn: boolean,
  surveyTabOpened: boolean
  username: string,
  currentPath: string
}

export interface IState {
  login: ILoginState
  nav: INavState
}

export const state = combineReducers<IState>({
  login: loginReducer,
  nav: navReducer
})