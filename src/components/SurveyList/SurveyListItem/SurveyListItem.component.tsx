import React, { Component } from 'react';
import { ISurveyItem, IUserState } from '../../../reducers';
import Button from 'react-bootstrap/Button';
import { withRouter, RouteComponentProps } from 'react-router-dom';


interface ISurveyListItemProps extends RouteComponentProps {
  surveyListItem: ISurveyItem
  bPublicSurvey: boolean
  user: IUserState
}

class SurveyListItem extends Component<ISurveyListItemProps, any> {

  onTakeSurveyBtnHandler = (surveyId: number) => {
    this.props.history.push(`/surveys/${surveyId}`)
  }

  onDataBtnHandler = (surveyId: number) => {
    this.props.history.push(`/analytics/${surveyId}`)
  }

  render() {
      const listItem = this.props.surveyListItem;
      if (listItem) {
        let takeSurveyBtn: any = null;
        if (this.props.bPublicSurvey) {
          
            takeSurveyBtn = <td><Button variant="primary" onClick={() => this.onTakeSurveyBtnHandler(listItem.id) }>Take Survey</Button></td>
          
        }
        return ( 
        <tr>
            <td>{listItem.title}</td>
            <td>{listItem.description}</td>
            <td>{listItem.dateClosed.toDateString()}</td>
                {takeSurveyBtn}
            
            <td>
              <Button variant="info" onClick={() => this.onDataBtnHandler(listItem.id) }>Data</Button>    
            </td>
          </tr>
        )
      } else {
        return null;
    }
  }
}

export default  withRouter(SurveyListItem);
