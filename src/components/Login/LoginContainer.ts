import { connect } from "react-redux";
import { LoginComponent } from './LoginComponent';
import { IState } from "../../reducers";
import { updatePassword, updateUsername, login } from '../../actions/Login.actions';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state: IState) => {
  return {
    username: state.login.username,
    password: state.login.password,
    userInfo: state.login.userInfo,
    errorMessage: state.login.errorMessage
  }
}

const mapDispatchToProps = {
  updateUsername,
  updatePassword,
  login
}

/* const loginRedirect = (appState) => {
  if(appState === "LOGIN_SUCCESS"){
    return <Redirect push to="/home" />
  }
  return null
}
 */
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);