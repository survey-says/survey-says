import { connect } from "react-redux";
import { SurveyBuildComponent } from './SurveyBuildComponent';
import { IState } from "../../reducers";
import { handleSubmit } from "../../actions/SurveyBuild.actions";

const mapStateToProps = (state: IState) => {
  return {
    surveyTitle: state.surveyBuild.surveyTitle,
    questionTypes: state.surveyBuild.questionTypes,
    errorMessage: state.surveyBuild.errorMessage,
    newSurvey: state.surveyBuild.newSurvey,
    user: state.user
  }
}

const mapDispatchToProps = {
  handleSubmit
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyBuildComponent)