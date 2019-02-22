import { INavState } from '.';
import { loginTypes } from '../actions/Login.actions';

const initialState: INavState = {
    isLoggedIn: false,
    username: 'Aaron'
}

export const navReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case (loginTypes.LOGIN): 
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
    }
    return state;
  }