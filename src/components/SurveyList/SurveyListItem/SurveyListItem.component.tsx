import React, { Component } from 'react';
import { ISurveyItem } from '../../../reducers';
import Button from 'react-bootstrap/Button';

interface ISurveyListItemProps {
  surveyListItem: ISurveyItem
}

class SurveyListItem extends Component<ISurveyListItemProps, any> {
  render() {
      const listItem = this.props.surveyListItem;
      if (listItem) {
        return ( 
          <tr>
            <td>{listItem.title}</td>
            <td>{listItem.description}</td>
            <td>{listItem.dateCreated.toDateString()}</td>
            <td>{listItem.dateClosed.toDateString()}</td>
            <td>
              <Button variant="info">Data</Button> 
            </td>
          </tr>
        )
      } else {
        return null;
    }
  }
}

export default  SurveyListItem;
