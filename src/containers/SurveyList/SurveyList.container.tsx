import { connect } from 'react-redux';
import { IState } from '../../reducers';

import { getPublicSurveys } from '../../actions/SurveyList.actions';
import SurveyList from '../../components/SurveyList/SurveyList';
import SurveyListItemContainer from '../SurveyListItem/SurveyListItem.container';

const mapStateToProps = (state: IState) => ({
    surveyList: state.surveyList
})
  
const mapDispatchToProps = {
    getPublicSurveys
}
  
// export default connect(mapStateToProps, mapDispatchToProps)(SurveyList)