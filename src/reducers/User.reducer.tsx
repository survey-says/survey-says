import { IUserState } from '.';

const initialState: IUserState = {
    isLoggedIn: false
}

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
     
    }
    return state;
  }