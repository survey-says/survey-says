export const loginTypes = {
  LOGIN: 'LOGIN'
}

export const login = () => async (dispatch) => {
  dispatch({
    payload: {},
    type: loginTypes.LOGIN
  })
  // I know there is more to do in the action but not sure how to proceed
}