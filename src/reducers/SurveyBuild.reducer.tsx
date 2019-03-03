import { ISurveyBuildState } from ".";
import { surveyBuildTypes } from "../actions/SurveyBuild.actions";

const initialState: ISurveyBuildState = {
  surveyTitle: '',
  questionTypes: '',
  errorMessage: '',
  newSurvey: {}
}

export const surveyBuildReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case surveyBuildTypes.SUBMIT_SUCCESS:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    case surveyBuildTypes.SUBMIT_FAILED:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    case surveyBuildTypes.CLEAR_SURVEY:
      return {
        ...state,
        surveyTitle: '',
        questionTypes: '',
        errorMessage: '',
        newSurvey: {}
      }
  }
  return state;
}