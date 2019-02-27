import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";

import { questionsReducer } from "./questionsReducer";

import { navReducer } from "./Nav.reducer";
import { userReducer } from "./User.reducer";



export interface ILoginState {
  username: string,
  password: string,
  userInfo: {},
  errorMessage: string
}
export interface SurveyQuestions{


questions: [{
type:string,
name:string,
title:string,
columns:[
  { value: number, text: string },
  { value: number, text: string },
  { value: number, text: string },
  { value: number, text: string },
  { value: number, text: string }],
  rows: [ { value: string, text: string },
  { value: string, text: string },
  { value: string, text: string },
  { value: string, text: string }]
}
]


}
export interface SurveyTable{

surveyTable: Array<SurveyQuestions>

}


export interface IUserState {
  isLoggedIn: boolean,
  username: string
}

export interface INavState {
  bOpenLinkClicked: boolean,
  bClosedLinkClicked: boolean 
}

export interface IState {
  login: ILoginState,
  nav: INavState,
  user: IUserState,
  surveyQuestions: SurveyQuestions
  
}

export const state = combineReducers<IState>({
  login: loginReducer,
  nav: navReducer,
  user: userReducer,
  surveyQuestions: questionsReducer
})