import { ssContext } from "../axios/ss.context";


export const registerTypes = {
  UPDATE_USERNAME: 'UPDATE_USERNAME',
  UPDATE_FIRSTNAME: 'UPDATE_FIRSTNAME',
  UPDATE_LASTNAME: 'UPDATE_LASTNAME',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  UPDATE_EMAIL: 'UPDATE_EMAIL',
  SUBMIT_FORM: 'SUBMIT_FORM',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL'
}

export const updateUsername = (username: string) => {
  console.log('The username to enter is (actions): ', username)
  return {
    payload: {
      username: username
    },
    type: registerTypes.UPDATE_USERNAME
  }
}

export const updateFirstName = (firstName: string) => {
  return {
    payload: {
      firstName: firstName
    },
    type: registerTypes.UPDATE_FIRSTNAME
  }
}

export const updateLastName = (lastName: string) => {
  return {
    payload: {
      lastName: lastName
    },
    type: registerTypes.UPDATE_LASTNAME
  }
}

export const updatePassword = (password: string) => {
  return {
    payload: {
      password: password
    },
    type: registerTypes.UPDATE_PASSWORD
  }
}

export const updateEmail = (email: string) => {
  return {
    payload: {
      email: email
    },
    type: registerTypes.UPDATE_EMAIL
  }
}


export const handleSubmit = (userData: {}) => async (dispatch) => {

  // Here will go the fetch call to out api
  // Sample of what this will look like
  try {
    const res = await ssContext.post('/user', userData);
    console.log(res);
    if (res.data) {
      dispatch({
        payload: {
          userInfo: res.data,
          errorMessage: "Register Successful",
          submitted: true
        },
        type: registerTypes.REGISTER_SUCCESS
      })
    } else {
      dispatch({
        payload: {
          errorMessage: "Register Failed",
          submitted: false
        },
        type: registerTypes.REGISTER_FAIL
      })
    }
  } catch (error) {
    dispatch({
      payload: {
        errorMessage: "Register Failed",
        submitted: false
      },
      type: registerTypes.REGISTER_FAIL
    })
  }

}