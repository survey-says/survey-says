import { INavState } from '.';
import { navTypes } from '../actions/Nav.actions';

const initialState: INavState = {
    bClosedLinkClicked: false,
    bOpenLinkClicked: false
}

export const navReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case (navTypes.OPEN_SURVEYS_TOGGLE):
            return {
                ...state,
                bOpenLinkClicked: !state.bOpenLinkClicked
            }
        case (navTypes.CLOSED_SURVEYS_TOGGLE):
            return {
                ...state,
                bClosedLinkClicked: !state.bClosedLinkClicked
            }
    }

    return state;
}