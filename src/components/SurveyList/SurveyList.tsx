import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
import { ISurveyListState } from '../../reducers';

interface ISurveyListProps {
    surveyList: ISurveyListState
 }

class SurveyList extends Component<ISurveyListProps, any> {

  render() {
    

    return (
        <Container>
            <Table striped bordered hover >
              <thead>
                <tr>Title</tr>
                <tr>Description</tr>
                <tr>Closing Date</tr>
              </thead>

            </Table>
        </Container>
    )
  }
}

export default SurveyList;

