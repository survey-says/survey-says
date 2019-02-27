import { connect } from "react-redux";
import { RegisterComponent } from './RegisterComponent';
import { IState } from "../../reducers";
import { updateEmail, updateFirstName, updateLastName, updatePassword, updateUsername, handleSubmit } from '../../actions/Register.actions';

const mapStateToProps = (state: IState) => {
  return {
    username: state.register.username,
    password: state.register.password,
    firstName: state.register.firstName,
    lastName: state.register.lastName,
    email: state.register.email,
    submitted: state.register.submitted,
    errorMessage: state.register.errorMessage,
    userInfo: state.register.userInfo
  }
}
const mapDispatchToProps = {
  updateEmail,
  updateFirstName,
  updateLastName,
  updatePassword,
  updateUsername,
  handleSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);