import { IUserState } from '.';
import { loginTypes } from '../actions/Login.actions';

const initialState: IUserState = {
    isLoggedIn: false,
    username: 'Aaron'
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case (loginTypes.LOGIN): 
            return {
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
    }
    return state;
  }