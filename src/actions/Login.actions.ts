import ssContext from "../axios/ss.context";
import { state } from '../reducers';

export const loginTypes = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  USERNAME_UPDATE: 'USERNAME_UPDATE',
  PASSWORD_UPDATE: 'PASSWORD_UPDATE',
  LOGOUT: 'LOGOUT'
}

export const updateUsername = (username: String) => {
  return {
    payload: {
      username: username
    },
    type: loginTypes.USERNAME_UPDATE
  }
}

export const updatePassword = (password: String) => {
  return {
    payload: {
      password: password
    },
    type: loginTypes.PASSWORD_UPDATE
  }
}

// Need async here because we will do a fetch request
// The username and password will come from the LoginComponent
export const login = (credentials: {}) => async (dispatch) => {
  try {
    const res = await ssContext.post('/login', credentials);
    console.log(res);
    if (res.data) {
      dispatch({
        payload: {
          userInfo: res,
          errorMessage: "Login Successful"
        },
        type: loginTypes.LOGIN_SUCCESS
      })
    } else {
      dispatch({
        payload: {
          errorMessage: "Invalid Credentials"
        },
        type: loginTypes.LOGIN_FAIL
      })
    }
  } catch (error) {
    dispatch({
      payload: {
        errorMessage: "Invalid Credentials"
      },
      type: loginTypes.LOGIN_FAIL
    })
  }
}

export const logout = () => {
  return {
    payload: {},
    type: loginTypes.LOGOUT
  }
}