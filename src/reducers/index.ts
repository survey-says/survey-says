import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { navReducer } from "./Nav.reducer";
import { userReducer } from "./User.reducer";
import { userInfo } from 'os';
import { register } from '../serviceWorker';

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

export interface IRegisterState {
  userInfo: {},
  submitted: boolean,
  errorMessage: string
}

export interface IState {
  login: ILoginState,
  user: IUserState,
  nav: INavState,
  register: IRegisterState
}



export const state = combineReducers<IState>({
  login: loginReducer,
  user: userReducer,
  nav: navReducer,
  register: registerReducer
})