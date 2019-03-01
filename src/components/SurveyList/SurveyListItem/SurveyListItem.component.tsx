import React, { Component } from 'react';
import { ISurveyItem, IUserState } from '../../../reducers';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { userInfo } from 'os';

interface ISurveyListItemProps {
  surveyListItem: ISurveyItem
  bPublicSurvey: boolean
  user: IUserState
}

class SurveyListItem extends Component<ISurveyListItemProps, any> {
  render() {
      const listItem = this.props.surveyListItem;
      if (listItem) {
        let takeSurveyBtn: any = null;
        if (this.props.bPublicSurvey && !this.props.user.isLoggedIn ) {
          takeSurveyBtn = <Button variant="primary">Take Survey</Button>
        }
        return ( 
        <tr>
            <td>{listItem.title}</td>
            <td>{listItem.description}</td>
            <td>{listItem.dateCreated.toDateString()}</td>
            <td>{listItem.dateClosed.toDateString()}</td>
            <td>
                {takeSurveyBtn}
            </td>
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
