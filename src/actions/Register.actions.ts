import { ssContext } from "../axios/ss.context";
import { ssClient } from "../axios/ss.client";
import { bool } from 'prop-types';
import { state } from '../reducers';

export const registerTypes = {
  UPDATE_FIELD: 'UPDATE_FIELD',
  UPDATE_FIELD_FAIL: 'UPDATE_FIELD_FAIL',
  SUBMIT_FORM: 'SUBMIT_FORM',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL'
}

export const handleChange = (fieldName: String, value: String) => {
  switch (fieldName) {
    case "firstName":
      return {
        payload: {
          userInfo: {
            firstName: value
          }
        },
        type: registerTypes.UPDATE_FIELD
      }
    case "lastName":
      return {
        payload: {
          userInfo: {
            lastName: value
          }

        },
        type: registerTypes.UPDATE_FIELD
      }
    case "username":
      return {
        payload: {
          userInfo: {
            username: value
          }
        },
        type: registerTypes.UPDATE_FIELD
      }
    case "password":
      return {
        payload: {
          userInfo: {
            password: value
          }
        },
        type: registerTypes.UPDATE_FIELD
      }

    case "email":
      return {
        payload: {
          userInfo: {
            email: value
          }
        },
        type: registerTypes.UPDATE_FIELD
      }
    default:
      return {
        payload: {
          errorMessage: "Unable to Update"
        },
        type: registerTypes.UPDATE_FIELD_FAIL
      }
  }
}

export const handleSubmit = (userData: {}) => async (dispatch) => {

  // Here will go the fetch call to out api
  // Sample of what this will look like
  try {
    const res = await ssClient.addNewUser(userData);
    console.log(res);
    if (res.data) {
      dispatch({
        payload: {
          userInfo: res,
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