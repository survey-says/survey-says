import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
const Survey= require( 'survey-react');
import {IState, SurveyQuestions} from '../../reducers/index'
import {connect} from "react-redux"




//create question object
let agree =        
[{questions: [  { type: "matrix", name: "Opinion", title: "Give me your opinion",       
columns: [{ value: 1, text: "Strongly Disagree" },
{ value: 2, text: "Disagree" },
{ value: 3, text: "Neutral" },
{ value: 4, text: "Agree" },
{ value: 5, text: "Strongly Agree" }],
rows: [{ value: "ok", text: "Text Here" },
{ value: "good", text: "Text Here" },
{ value: "average", text: "Text Here" },
{ value: "bad", text: "Text Here" }]}
]
}]

//gets the key value for questions for the survey form. this is purely for format
let agreeArray: string[] = [];
Object.keys(agree).forEach(function(key) {
  //get the value of name
  let val = agree[key]["questions"];
  //push the questions string in the array
  agreeArray.push(val);
});
console.log(agreeArray);




let YN = 
[{questions: [
    { type: "radiogroup", name: "YesNo",
        title: "Give me a yes or no",
        choices: ["Yes", "No", "Maybe", "Not Applicable"]},
    
]}]
let ynArray: string[] = [];
Object.keys(YN).forEach(function(key) {
  let val = YN[key]["questions"];
  ynArray.push(val);
});
console.log(ynArray);





let rating = 
        [{questions: [
           
            { type: "rating", name: "customerRating", title: "Rating",
                mininumRateDescription: "Low", maximumRateDescription: "High" }
    ]}]
    let ratingArray: string[] = [];
Object.keys(rating).forEach(function(key) {
  let val = rating[key]["questions"];
  ratingArray.push(val);
});
console.log(ratingArray);



let thankYou = 
    [{ questions: [
        { type: "text", name: "email",
            title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."}
    ]}]
    let thankYouArray: string[] = [];
Object.keys(thankYou).forEach(function(key) {
  let val = thankYou[key]["questions"];
  thankYouArray.push(val);
});
console.log(thankYouArray);





let feedback = 
  [{questions: [
     { type: "comment", name: "suggestions", title:"Give me some feedback", }
    ]}]
    let feedbackArray: string[] = [];
    Object.keys(feedback).forEach(function(key) {
      let val = feedback[key]["questions"];
      feedbackArray.push(val);
    });
    console.log(feedbackArray);
    



 let multi = 
    [{questions: [
        { type: "radiogroup", name: "MultipleChoice",
            title: "Give me a multiple choice",
            choices: ["A", "B", "C", "D"]},
        
    ]}]
    let multiArray: string[] = [];
    Object.keys(multi).forEach(function(key) {
      let val = multi[key]["questions"];
      multiArray.push(val);
    });
    console.log(multiArray);
    





export class QuestionComponent extends React.Component <any,any>{


  
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    
  }

  render() {    

     //here is where you need to get the id number of the question type and it is saved to this array
let choice=[3, 1,2];


    let agree={questions: agreeArray[0]}
    let multi= {questions: multiArray[0]}
    let yesNo= {questions: ynArray[0]}
    let rating= {questions: ratingArray[0]}
    let thankYou= {questions: thankYouArray[0]}
    let feedback= {questions: feedbackArray[0]}

//condition that pushes to array of pages on the survey depending on number choice
    let surveyPages:{ questions: string; }[]=[]
     if (choice.includes(1)){
      surveyPages.push(agree);
     }
     if (choice.includes(2)){
      surveyPages.push(multi);
     }
     if (choice.includes(3)){
      surveyPages.push(yesNo);
     }
     if (choice.includes(4)){
      surveyPages.push(rating);
     }
     if (choice.includes(5)){
      surveyPages.push(thankYou);
     }
     if (choice.includes(6)){
      surveyPages.push(feedback);
     }




    


//basically creates the survey form 
    let survey= { title: "Title of survey", showProgressBar: "top", pages: surveyPages
  }
    let result = survey;
    


//{satisfaction} > 3
    let model= new Survey.Model(result);  
  



    return (
        <div className="container question-container">
      <Survey.Survey model={model}/>
        </div>  
  )
}
}




//ReactDOM.render( <QuestionComponent/>, document.getElementById('root'));
export default QuestionComponent;