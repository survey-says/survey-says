import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import SurveyListItem from './SurveyListItem/SurveyListItem.component';
import { IState, ISurveyItem, IUserState } from '../../reducers';
import { getPublicSurveys, getUsersSurveys } from '../../actions/SurveyList.actions';
import { connect } from 'react-redux';

interface ISurveyListProps {
    publicSurveys: ISurveyItem[]
    usersSurveys: ISurveyItem[]
    user: IUserState
    getPublicSurveys(): void
    getUsersSurveys(userId: number): void
 }

class SurveyList extends Component<ISurveyListProps, any> {

  componentDidMount() {
    this.props.getPublicSurveys();
    if (this.props.user) {
       this.props.getUsersSurveys(this.props.user.userId);
    }
  }

  render() {
    // Need to decide which list to render with url
    const urlSections: string[] = location.pathname.split('/');
    const statusURL: string = urlSections[urlSections.length-2];
    const whichSurveys: string = urlSections[urlSections.length-1];
    let surveysToUse: any = null;
  
    if (whichSurveys === 'home') {
      let publicSurveys = this.props.publicSurveys
                          .map(survey => {return (<SurveyListItem key={survey.id} surveyListItem={survey} />)});                
      surveysToUse = publicSurveys;
    }

    if (statusURL === 'open-surveys') {
      let usersSurveys = this.props.usersSurveys.filter(survey => (survey.status === 1))
                          .map(survey => {return (<SurveyListItem key={survey.id} surveyListItem={survey} />) });
      surveysToUse = usersSurveys;

      if (whichSurveys === 'collaborations') {
        surveysToUse = null;
      }

      if (whichSurveys === 'expiring') {
        surveysToUse = null;
      }
    }

    if (statusURL === 'closed-surveys') {
      let usersSurveys = this.props.usersSurveys.filter(survey => (survey.status === 2))
                          .map(survey => {return (<SurveyListItem key={survey.id} surveyListItem={survey} />) });
      surveysToUse = usersSurveys;

      if (whichSurveys === 'collaborations') {
        surveysToUse = null;
      }

      if (whichSurveys === 'expiring') {
        surveysToUse = null;
      }
    }
      
    return (
        <Container>
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Creation Date</th>
                  <th>Closing Date</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {surveysToUse}
              </tbody>
            </Table>
        </Container>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  publicSurveys: state.surveyLists.publicSurveys,
  usersSurveys: state.surveyLists.usersSurveys,
  user: state.user
})

const mapDispatchToProps = {
  getPublicSurveys,
  getUsersSurveys
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);

