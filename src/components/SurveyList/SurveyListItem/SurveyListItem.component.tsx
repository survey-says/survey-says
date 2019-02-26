import React, { Component } from 'react';
import { ISurveyListItemState } from '../../../reducers';

interface ISurveyListItemProps {
  surveyListItem: ISurveyListItemState
}

class SurveyListItem extends Component<ISurveyListItemProps, any> {
  render() {
    const listItem = this.props.surveyListItem.surveyItem;
    return (
      <tr>
        <td>{listItem.title}</td>
        <td>{listItem.description}</td>
        <td>{listItem.dateClosed}</td>
      </tr>
    )
  }
}

export default  SurveyListItem;
