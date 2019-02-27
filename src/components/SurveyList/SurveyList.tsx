import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import SurveyListItem from './SurveyListItem/SurveyListItem.component';

interface ISurveyListProps {
    surveyList: []
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

export default SurveyList;

