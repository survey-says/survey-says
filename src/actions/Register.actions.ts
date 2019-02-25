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
          firstName: value
        },
        type: registerTypes.UPDATE_FIELD
      }
    case "lastName":
      return {
        payload: {
          lastName: value
        },
        type: registerTypes.UPDATE_FIELD
      }
    case "username":
      return {
        payload: {
          username: value
        },
        type: registerTypes.UPDATE_FIELD
      }
    case "password":
      return {
        payload: {
          password: value
        },
        type: registerTypes.UPDATE_FIELD
      }

    case "email":
      return {
        payload: {
          email: value
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