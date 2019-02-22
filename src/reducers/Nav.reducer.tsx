import { INavState } from '.';
import { loginTypes } from '../actions/Login.actions';
import { navTypes } from '../actions/Nav.actions';

const initialState: INavState = {
    surveyTabOpened: false,
    isLoggedIn: false,
    username: 'Aaron',
    currentPath: '/'
}

export const navReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case (loginTypes.LOGIN): 
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
        case (navTypes.CHANGE_CURRENT_PATH):
            return {
                ...state,
            }
    }
    return state;
  }