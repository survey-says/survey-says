import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import AgreeComponent from '../Questions/AgreeComponent'
import YNcomponent from '../Questions/YNcomponent'
import MultiComponent from '../Questions/multiComponent'
import RatingComponent from '../Questions/Rating'
import FeedbackComponent from '../Questions/FeedbackComponent'
const Survey= require( 'survey-react');
//import 'survey-react/survey.css';



export class SubmitComponent extends React.Component {
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {    
    let survey = { title: "Survey Says..", showProgressBar: "top", pages: [
        {questions: [
    
            
        ]},
        {questions: [

            
        ]},
        { questions: [
            { type: "text", name: "email",
                title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."}
        ]}
    ]};
    

//{satisfaction} > 3
    let model= new Survey.Model(survey);    
    return (
        <div className="container question-container">
      <Survey.Survey model={model}/>
        </div>     
        
    );
  }
}



ReactDOM.render(<SubmitComponent/> , document.getElementById('root'));
export default SubmitComponent;