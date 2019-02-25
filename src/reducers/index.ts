import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { navReducer } from "./Nav.reducer";
import { userReducer } from "./User.reducer";
import { userInfo } from 'os';
import { surveyListReducer } from "./SurveyList.reducer";
import { surveyListItemReducer } from './SurveyListItem.reducer';

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
  inSurveyPage: boolean
}

export interface ISurveyListState {
  currentList: Array<ISurveyListItemState>
}

export interface ISurveyListItemState {
  surveyItem: {}
}

export interface IState {
  login: ILoginState
  user: IUserState
  nav: INavState
  surveyList: ISurveyListState
  surveyListItem: ISurveyListItemState
}

export const state = combineReducers<IState>({
  login: loginReducer,
  user: userReducer,
  nav: navReducer,
  surveyList: surveyListReducer,
  surveyListItem: surveyListItemReducer
})