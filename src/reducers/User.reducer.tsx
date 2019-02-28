import { IUserState } from './index';
import { loginTypes } from '../actions/Login.actions';
import { registerTypes } from '../actions/Register.actions';

const initialState: IUserState = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    userId: 0,
    isLoggedIn: false
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case (loginTypes.LOGIN_SUCCESS):
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.userInfo.username,
                firstName: action.payload.userInfo.firstName,
                lastName: action.payload.userInfo.lastName,
                email: action.payload.userInfo.email,
                userId: action.payload.userInfo.userId
            }
        case (registerTypes.REGISTER_SUCCESS):
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.userInfo.username
            }
        case (loginTypes.LOGOUT):
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                userId: 0
            }
    }

    return state;
}