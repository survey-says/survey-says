import { ISurveyListState } from './index';
import { surveyListTypes } from '../actions/SurveyList.actions'

const initialState: ISurveyListState = {
    publicSurveys: []
}

export const surveyListReducer = (state = initialState, action: any) => {
    switch (action.type) {
       case (surveyListTypes.GET_PUBLIC_SURVEYS):
            return {
                ...state,
                publicSurveys: action.payload.publicSurveys
            }          
    }

    return state;
}