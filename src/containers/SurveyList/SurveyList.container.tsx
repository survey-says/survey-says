import { connect } from 'react-redux';
import { IState } from '../../reducers';

import { getPublicSurveys } from '../../actions/SurveyList.actions';
import SurveyList from '../../components/SurveyList/SurveyList';
import SurveyListItemContainer from '../SurveyListItem/SurveyListItem.container';

const mapStateToProps = (state: IState) => ({
    surveyLists: state.surveyLists.publicSurveys
})
  
const mapDispatchToProps = {
    getPublicSurveys
}
  
// export default connect(mapStateToProps, mapDispatchToProps)(SurveyList)