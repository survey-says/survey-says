import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
<<<<<<< HEAD
import { questionsReducer } from "./questionsReducer";
=======
import { navReducer } from "./Nav.reducer";
import { userReducer } from "./User.reducer";
>>>>>>> 720510bd4be6d8baeb0bc1362500bb43e3165f48
import { userInfo } from 'os';
import {Survey} from  'survey-react';


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
  surveyTabOpened: boolean
  currentRootPath: string
}

export interface IState {
<<<<<<< HEAD
  login: ILoginState,

  surveyQuestions: SurveyQuestions
  
=======
  login: ILoginState
  user: IUserState
  nav: INavState
>>>>>>> 720510bd4be6d8baeb0bc1362500bb43e3165f48
}

export const state = combineReducers<IState>({
  login: loginReducer,
<<<<<<< HEAD
  surveyQuestions: questionsReducer
=======
  user: userReducer,
  nav: navReducer
>>>>>>> 720510bd4be6d8baeb0bc1362500bb43e3165f48
})