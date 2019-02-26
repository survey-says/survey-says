import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import { ISurveyListState } from '../../reducers';
import SurveyListItem from './SurveyListItem/SurveyListItem.component';

interface ISurveyListProps {
    surveyList: ISurveyListState
 }

class SurveyList extends Component<ISurveyListProps, any> {

  render() {
    let surveys = this.props.surveyList.currentList
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

export default SurveyList;

