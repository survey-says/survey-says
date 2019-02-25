import { ISurveyListItemState } from './index';
import { number } from 'prop-types';

const initialState: ISurveyListItemState = {
    surveyItem: {
        id: -1,
        title: '',
        creator: '',
        description: '',
        dateCreated: new Date(),
        dateClosed: new Date(),
        status: -1,
        privacy: -1
    }
}

export const surveyListItemReducer = (state = initialState, action: any) => {
    switch (action.type) {
       
    }

    return state;
}