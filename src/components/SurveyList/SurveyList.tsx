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
    
    let publicSurveys = this.props.publicSurveys
                    .map(survey => {
                      return (
                        <SurveyListItem key={survey.id} surveyListItem={survey} />
                      )
                    });
    
    let usersSurveys = this.props.usersSurveys
                      .map(survey => {
                        return (
                          <SurveyListItem key={survey.id} surveyListItem={survey} />
                        )
                      });

    if (whichSurveys === 'home') {
      surveysToUse = publicSurveys;
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
                  <th>Analytics</th>
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

