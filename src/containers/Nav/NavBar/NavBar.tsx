import { connect } from 'react-redux'
import { MainNavBar } from '../../../components/Nav/NavBar/MainNavBar/MainNavBar';
import { IState} from '../../../reducers';
import { login } from '../../../actions/Login.actions'


const mapStateToProps = (state: IState) => ({
  nav: state.nav
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar)
