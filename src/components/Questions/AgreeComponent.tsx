import React, { Component } from 'react';
import { render } from 'react-dom';

const Survey= require( 'survey-react');
//import 'survey-react/survey.css';

export class AgreeComponent extends React.Component <any,any> {

  render() {    
    let json = 
       
            { type: "matrix", name: "Opinion", title: "Give me your opinion",
                columns: [{ value: 1, text: "Strongly Disagree" },
                    { value: 2, text: "Disagree" },
                    { value: 3, text: "Neutral" },
                    { value: 4, text: "Agree" },
                    { value: 5, text: "Strongly Agree" }],
                rows: [{ value: "value", text: "Text" },
                    { value: "value", text: "Text" },
                    { value: "value", text: "Text" },
                    { value: "value", text: "Text" }]}
        //   EXAMPLE           { value: "easy to use", text: "Product is easy to use" }]}



                ;

//{satisfaction} > 3
    let model= new Survey.Model(json);    
    return (
        <div className="container question-container">
      <Survey.Survey model={model}/>
        </div>      
    );
  }
}

render(< AgreeComponent/>, document.getElementById('root'));
export default AgreeComponent;