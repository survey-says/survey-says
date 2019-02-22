import { IUserState } from './index';
import { loginTypes } from '../actions/Login.actions';

const initialState: IUserState = {
    username: '',
    isLoggedIn: false
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case (loginTypes.LOGIN_SUCCESS):
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.userInfo.username
            }
        case (loginTypes.LOGOUT):
            return {
                ...state,
                isLoggedIn: false,
                username: ''
            }       
    }

    return state;
}