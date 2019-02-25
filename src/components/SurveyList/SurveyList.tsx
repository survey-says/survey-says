import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'

class SurveyList extends Component<any, any> {

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

