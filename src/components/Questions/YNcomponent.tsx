import React, { Component } from 'react';
import { render } from 'react-dom';

const Survey= require( 'survey-react');
//import 'survey-react/survey.css';



export class QuestionComponent extends React.Component <any,any>{
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {    
    let json = 
        {questions: [
            { type: "radiogroup", name: "YesNo",
                title: "Give me a yes or no",
                choices: ["Yes", "No", "Maybe", "Not Applicable"]},
            
        ]}

//{satisfaction} > 3
    let model= new Survey.Model(json);    
    return (
        <div className="container question-container">
      <Survey.Survey model={model}/>
        </div>      
    );
  }
}

render(< QuestionComponent/>, document.getElementById('root'));
export default QuestionComponent;