import { ISurveyListState } from './index';
import { surveyListTypes } from '../actions/SurveyList.actions'

const initialState: ISurveyListState = {
    publicSurveys: [],
    usersSurveys: [],
    collaboratingSurveys: []
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
        case (surveyListTypes.GET_COLLABORATING_SURVEYS):
            return {
                ...state,
                collaboratingSurveys: action.payload.collaboratingSurveys
            }
    }

    return state;
}