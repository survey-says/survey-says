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
    //getUsersSurveys(userId: number): void
 }

class SurveyList extends Component<ISurveyListProps, any> {

  componentDidMount() {
    this.props.getPublicSurveys();
    // if (this.props.user) {
    //   this.props.getUsersSurveys(this.props.user.userId);
    // }
    
  }

  render() {
    let publicSurveys: any = null;
    let usersSurveys: any = null;
    if (publicSurveys) {
    publicSurveys = this.props.publicSurveys
                    .map(survey => {
                      return (
                        <SurveyListItem key={survey.id} surveyListItem={survey} />
                      )
                    });
    }

    // if (usersSurveys) {
    //   usersSurveys = this.props.usersSurveys
    //                   .map(survey => {
    //                     return (
    //                       <SurveyListItem key={survey.id} surveyListItem={survey} />
    //                     )
    //                   });
    //   }
    
    return (
        <Container>
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Closing Date</th>
                </tr>
              </thead>
              <tbody>
                {publicSurveys}
              </tbody>
            </Table>
        </Container>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  surveyList: state.surveyLists.publicSurveys,
  usersSurveys: state.surveyLists.usersSurveys,
  user: state.user
})

const mapDispatchToProps = {
  getPublicSurveys,
 //getUsersSurveys
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);

