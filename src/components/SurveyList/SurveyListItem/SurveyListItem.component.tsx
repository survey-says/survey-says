import React, { Component } from 'react';

interface ISurveyListItemProps {
  surveyListItem: {
    id: number
    title: string
    creator: string
    description: string
    dateCreated: Date
    dateClosed: Date
    status: number
    privacy: number
  }
}

class SurveyListItem extends Component<ISurveyListItemProps, any> {
  render() {
      const listItem = this.props.surveyListItem;
      if (listItem) {
        return ( 
          <tr>
            <td>{listItem.title}</td>
            <td>{listItem.description}</td>
            <td>{listItem.dateClosed.toDateString()}</td>
          </tr>
        )
      } else {
        return null;
    }
  }
}

export default  SurveyListItem;
