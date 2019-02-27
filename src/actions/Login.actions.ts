import { ssContext } from "../axios/ss.context";
import { ssClient } from "../axios/ss.client";
import { bool } from 'prop-types';
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
  // Here we will do our fetch call to our api


  // Sample of what this will look like when the time comes

  try {
    const res = await ssClient.findByUsernameAndPassword(credentials);
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

  // Since we don't currently have 
  /* const users = [{ username: "lolo", password: "lolopass", role: "manager" }, { username: "aaron", password: "pass56", role: "ceo" }, { username: "iman", password: "pass33", role: "associate" }]
  let found = false;
  users.forEach((user) => {
    if ((user.username === username) && (user.password === password)) {
      found = true;
      dispatch({
        payload: {
          userInfo: user,
          errorMessage: "Login Successful"
        },
        type: loginTypes.LOGIN_SUCCESS
      })
    }
  });
  if (!found) {
    dispatch({
      payload: {
        errorMessage: "Invalid Credentials"
      },
      type: loginTypes.LOGIN_FAIL
    })
  } */

  // I know there is more to do in the action but not sure how to proceed
}

export const logout = () => {
  return {
    payload: {},
    type: loginTypes.LOGOUT
  }
}