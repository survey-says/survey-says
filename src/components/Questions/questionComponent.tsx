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

/*let sendDataToServer=(survey) => {
    let resultAsString = JSON.stringify(survey.data);
  alert(resultAsString); //send  request to web server?
}
*/


export class QuestionComponent extends React.Component <any,any>{
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }



  
  render=()=> {    
  
  let survey = { title: "Survey Says..", showProgressBar: "top", pages: [
        {questions: [
       
        ]},
        {questions: [

            
        ]},
        { questions: [
          
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



ReactDOM.render( <QuestionComponent/>, document.getElementById('root'));
export default QuestionComponent;