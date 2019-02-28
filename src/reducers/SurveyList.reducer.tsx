import { ISurveyListState } from './index';
import { surveyListTypes } from '../actions/SurveyList.actions'

const initialState: ISurveyListState = {
    publicSurveys: [],
    usersSurveys: []
}

export const surveyListReducer = (state = initialState, action: any) => {
    switch (action.type) {
       case (surveyListTypes.GET_PUBLIC_SURVEYS):
            return {
                ...state,
                publicSurveys: action.payload.publicSurveys
            }   
        case (surveyListTypes.GET_USERS_SURVEYS):
            return {
                ...state,
                usersSurveys: action.payload.usersSurveys
            }           
    }

    return state;
}