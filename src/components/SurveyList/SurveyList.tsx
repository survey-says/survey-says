import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import SurveyListItem from './SurveyListItem/SurveyListItem.component';
import { IState, ISurveyItem } from '../../reducers';
import { getPublicSurveys } from '../../actions/SurveyList.actions';
import { connect } from 'react-redux';

interface ISurveyListProps {
    surveyList: ISurveyItem[]
    getPublicSurveys(): void
 }

class SurveyList extends Component<ISurveyListProps, any> {

  componentDidMount() {
    this.props.getPublicSurveys();
  }

  render() {
    let surveys = this.props.surveyList
                    .map(survey => {
                      return (
                        <SurveyListItem surveyListItem={survey} />
                      )
                    });
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
              {surveys}
            </Table>
        </Container>
    )
  }
}

const mapStateToProps = (state: IState) => ({
  surveyList: state.surveyLists.publicSurveys
})

const mapDispatchToProps = {
  getPublicSurveys
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList);

