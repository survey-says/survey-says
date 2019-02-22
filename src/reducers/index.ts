import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { navReducer } from "./Nav.reducer";
import { userReducer } from "./User.reducer";
import { userInfo } from 'os';

export interface ILoginState {
  username: string,
  password: string,
  userInfo: {},
  errorMessage: string
}

export interface IUserState {
  isLoggedIn: boolean,
  username: string
}

export interface INavState {
  surveyTabOpened: boolean
  currentRootPath: string
}

export interface IState {
  login: ILoginState
  user: IUserState
  nav: INavState
}

export const state = combineReducers<IState>({
  login: loginReducer,
  user: userReducer,
  nav: navReducer
})