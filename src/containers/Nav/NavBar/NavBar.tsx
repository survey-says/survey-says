import { connect } from 'react-redux'
import { MainNavBar } from '../../../components/Nav/NavBar/MainNavBar/MainNavBar';
import { IState} from '../../../reducers';
import { login, logout } from '../../../actions/Login.actions'
import { surveyToggle } from '../../../actions/Nav.actions';


const mapStateToProps = (state: IState) => ({
  nav: state.nav,
  user: state.user
})

const mapDispatchToProps = {
  login,
  logout,
  surveyToggle
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar)
