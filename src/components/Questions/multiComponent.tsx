import React, { Component } from 'react';
import { render } from 'react-dom';

const Survey= require( 'survey-react');
//import 'survey-react/survey.css';

export class MultiComponent extends React.Component {
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {    
    let json = 
        {questions: [
            { type: "radiogroup", name: "MultipleChoice",
                title: "Give me a multiple choice",
                choices: ["A", "B", "C", "D"]},
            
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

render(< MultiComponent/>, document.getElementById('root'));
export default MultiComponent;