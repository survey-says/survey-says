import ssContext from "../axios/ss.context";
import ssClient from "../axios/ss.client";

export const surveyListTypes = {
    GET_PUBLIC_SURVEYS: 'GET_PUBLIC_SURVEYS',
    GET_USERS_SURVEYS: 'GET_USERS_SURVEYS'
}

export const getPublicSurveys = () => async (dispatch) => {
    try {
        const surveys = await ssClient.findSurveysByPrivacy(1);
        if(surveys) {
            dispatch({
                payload: {
                    publicSurveys: surveys.map(survey => {
                        return {
                            id: survey.surveyId,
                            title: survey.title,
                            creator: survey.creator,
                            description: survey.description,
                            dateCreated: new Date(survey.dateCreated),
                            dateClosed: new Date(survey.closingDate),
                            status: survey.status,
                            privacy: survey.privacy
                        }
                    })
                },
                type: surveyListTypes.GET_PUBLIC_SURVEYS
            })
        }
    } catch (error) {
        console.log
    }
}

export const getUsersSurveys = (userId: number) => async (dispatch) => {
    try {
        const res = await ssContext.get(`/surveys/creator/${userId}`);
        console.log(res);
        if(res.data) {
            dispatch({
                payload: {
                    usersSurveys: res.data.map(survey => {
                        return {
                            id: survey.surveyId,
                            title: survey.title,
                            creator: survey.creator,
                            description: survey.description,
                            dateCreated: new Date(survey.dateCreated),
                            dateClosed: new Date(survey.closingDate),
                            status: survey.status,
                            privacy: survey.privacy
                        }
                    })
                },
                type: surveyListTypes.GET_USERS_SURVEYS
            })
        }
    } catch (error) {
        console.log
    }
}