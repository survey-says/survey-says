import { INavState } from '.';
import { loginTypes} from '../actions/Login.actions';

const initialState: INavState = {
    surveyTabOpened: false,
    currentPath: '/'
}

export const navReducer = (state = initialState, action: any) => {
    switch (action.type) {

    }

    return state;
}