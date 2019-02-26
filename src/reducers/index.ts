import { combineReducers } from "redux";
import { loginReducer } from "./Login.reducer";
import { questionsReducer } from "./questionsReducer";
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


export interface IState {
  login: ILoginState,

  surveyQuestions: SurveyQuestions
  
}

export const state = combineReducers<IState>({
  login: loginReducer,
  surveyQuestions: questionsReducer
})