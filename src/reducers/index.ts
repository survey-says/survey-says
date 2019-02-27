import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";

import { questionsReducer } from "./questionsReducer";
import { registerReducer } from "./Register.reducer";
import { navReducer } from "./Nav.reducer";
import { userReducer } from "./User.reducer";



export interface ILoginState {
  username: string,
  password: string,
  userInfo: {},
  errorMessage: string
}
export interface SurveyQuestions {
  questions: [{
    type: string,
    name: string,
    title: string,
    columns: [
      { value: number, text: string },
      { value: number, text: string },
      { value: number, text: string },
      { value: number, text: string },
      { value: number, text: string }],
    rows: [{ value: string, text: string },
      { value: string, text: string },
      { value: string, text: string },
      { value: string, text: string }]
  }
  ]
}
export interface SurveyTable {

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

export interface IRegisterState {
  username: string,
  password: string,
  email: string,
  firstName: string,
  lastName: string,
  submitted: boolean,
  errorMessage: string,
  userInfo: {}
}

export interface IState {
  login: ILoginState,
  user: IUserState,
  nav: INavState,
  register: IRegisterState
  surveyQuestions: SurveyQuestions
}



export const state = combineReducers<IState>({
  login: loginReducer,
  nav: navReducer,
  user: userReducer,
  register: registerReducer,
  surveyQuestions: questionsReducer
})