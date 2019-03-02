import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import SurveyListItem from './SurveyListItem/SurveyListItem.component';
import { IState, ISurveyItem, IUserState } from '../../reducers';
import { getPublicSurveys, getUsersSurveys, getCollaboratingSurveys } from '../../actions/SurveyList.actions';
import { connect } from 'react-redux';

interface ISurveyListProps {
    publicSurveys: ISurveyItem[]
    usersSurveys: ISurveyItem[]
    collaboratingSurveys: ISurveyItem[]
    user: IUserState
    getPublicSurveys(): void
    getUsersSurveys(userId: number): void
    getCollaboratingSurveys(userId: number): void
 }

class SurveyList extends Component<ISurveyListProps, any> {

  componentDidMount() {
    this.props.getPublicSurveys();
    if (this.props.user) {
       this.props.getUsersSurveys(this.props.user.userId);
       this.props.getCollaboratingSurveys(this.props.user.userId);
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
                          .map(survey => {return (<SurveyListItem 
                            key={survey.id} 
                            surveyListItem={survey}
                            bPublicSurvey={true}
                            user={this.props.user} />)});                
      surveysToUse = publicSurveys;
    }

    if (statusURL === 'open-surveys') {
      let usersSurveys = this.props.usersSurveys.filter(survey => (survey.dateCreated.valueOf() <= survey.dateClosed.valueOf()))
                          .map(survey => {return (<SurveyListItem 
                            key={survey.id} 
                            surveyListItem={survey}
                            bPublicSurvey={false}
                            user={this.props.user} />)}); 
      surveysToUse = usersSurveys;

    if (whichSurveys === 'collaborations') {
      let collaboratingSurveys = this.props.collaboratingSurveys
                            .map(survey => {return (<SurveyListItem 
                              key={survey.id} 
                                surveyListItem={survey}
                                bPublicSurvey={false}
                                user={this.props.user} />)}); 
        surveysToUse = collaboratingSurveys;
      }

      if (whichSurveys === 'expiring') {
        let usersSurveys = this.props.usersSurveys.filter(survey => ((survey.dateClosed.valueOf() - Date.now()) < 259200000)) 
                          .map(survey => {return (<SurveyListItem 
                            key={survey.id} 
                            surveyListItem={survey}
                            bPublicSurvey={false}
                            user={this.props.user} />)}); 
        surveysToUse = usersSurveys;
      }
    }

    if (statusURL === 'closed-surveys') {
      let usersSurveys = this.props.usersSurveys.filter(survey => (survey.dateCreated.valueOf() > survey.dateClosed.valueOf()))
                          .map(survey => {return (<SurveyListItem 
                              key={survey.id} 
                              surveyListItem={survey}
                              bPublicSurvey={false}
                              user={this.props.user} />)}); 
      surveysToUse = usersSurveys;

      if (whichSurveys === 'collaborations') {
        let collaboratingSurveys = this.props.collaboratingSurveys
                            .map(survey => {return (<SurveyListItem 
                            key={survey.id} 
                            surveyListItem={survey}
                            bPublicSurvey={false}
                            user={this.props.user} />)}); 
        surveysToUse = collaboratingSurveys;
      }

    // No expiring tab for already closed surveys
    }
      
    return (
        <Container>
          <div style={{overflowX: "auto"}}>
            <Table  striped bordered hover >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Creation Date</th>
                  <th>Closing Date</th>
                  <th></th>
                  {!this.props.user? <th></th>: null}
                </tr>
              </thead>
              <tbody>
                {surveysToUse}
              </tbody>
            </Table>
            </div>
        </Container>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  publicSurveys: state.surveyLists.publicSurveys,
  usersSurveys: state.surveyLists.usersSurveys,
  collaboratingSurveys: state.surveyLists.collaboratingSurveys,
  user: state.user
})

const mapDispatchToProps = {
  getPublicSurveys,
  getUsersSurveys,
  getCollaboratingSurveys
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);

