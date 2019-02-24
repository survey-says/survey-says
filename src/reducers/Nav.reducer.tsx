import { INavState } from '.';
import { navTypes } from '../actions/Nav.actions';

const initialState: INavState = {
    surveyTabOpened: false,
    currentRootPath: '/'
}

export const navReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case (navTypes.SURVEY_TOGGLE):
            return {
                ...state,
                surveyTabOpened: !state.surveyTabOpened
            }
    }

    return state;
}