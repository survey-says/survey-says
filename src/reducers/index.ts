import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { navReducer } from "./Nav.reducer";
import { userReducer } from "./User.reducer";
import { userInfo } from 'os';
import { surveyListReducer } from "./SurveyList.reducer";

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
  bOpenLinkClicked: boolean,
  bClosedLinkClicked: boolean 
}

export interface ISurveyListState {
  currentList: ISurveyItem[]
}

// For declarations
export interface ISurveyItem {
    id: number
    title: string
    creator: string
    description: string
    dateCreated: Date
    dateClosed: Date
    status: number
    privacy: number
  }

export interface IState {
  login: ILoginState
  user: IUserState
  nav: INavState
  surveyList: ISurveyListState
}

export const state = combineReducers<IState>({
  login: loginReducer,
  user: userReducer,
  nav: navReducer,
  surveyList: surveyListReducer
})