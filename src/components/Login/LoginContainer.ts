import { connect } from "react-redux";
import { LoginComponent } from './LoginComponent';
import { IState } from "../../reducers";
import { updatePassword, updateUsername, login, clearState } from '../../actions/Login.actions';

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
  clearState,
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