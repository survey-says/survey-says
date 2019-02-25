import { connect } from 'react-redux';
import { IState } from '../../reducers';

import SurveyList from '../../components/SurveyList/SurveyList';

const mapStateToProps = (state: IState) => ({

})
  
const mapDispatchToProps = {
    
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SurveyList)