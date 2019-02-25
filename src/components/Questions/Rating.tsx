import React, { Component } from 'react';
import { render } from 'react-dom';

const Survey= require( 'survey-react');
//import 'survey-react/survey.css';



export class RatingComponent extends React.Component {
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {    
    let json = 
        {questions: [
           
            { type: "rating", name: "customerRating", title: "Rating",
                mininumRateDescription: "Low", maximumRateDescription: "High" }
    ]};
//{satisfaction} > 3
    let model= new Survey.Model(json);    
    return (
        <div className="container question-container">
      <Survey.Survey model={model}/>
        </div>      
    );
  }
}

render(< RatingComponent/>, document.getElementById('root'));
export default RatingComponent;