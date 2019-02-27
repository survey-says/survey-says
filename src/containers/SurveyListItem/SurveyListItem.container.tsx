import { connect } from 'react-redux'
import { IState } from '../../reducers';
import SurveyListItem from '../../components/SurveyList/SurveyListItem/SurveyListItem.component';

const mapStateToProps = (state: IState) => ({
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyListItem)
