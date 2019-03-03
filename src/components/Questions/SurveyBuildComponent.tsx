import React from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import { IUserState } from '../../reducers';
const ReactDOM = require('react-dom')



export interface ISurveyBuildProps {
  //user: IUserState,
  surveyTitle: string,
  type: string,
  errorMessage: string,
  newSurvey: {},
  handleSubmit(newSurvey: {}, userId: number): void
}


export class SurveyBuildComponent extends React.Component<ISurveyBuildProps, any> {
  constructor(props) {
    super(props);
    // this.state = {
    //   privacy: 1
    // }
  }

  handleChange = (event) => { }

  setVisibility = (ok, box) => {
    let id = $(ok).val()

    if (id == 1) {
      // Show the hidden fields.

      $("#t1").toggle();
      // Populate the input.
    }


    if (id == 2) {
      // Show the hidden fields.
      $("#t2").toggle();
      // Populate the input.
    }

    if (id == 3) {
      // Show the hidden fields.
      $("#t3").toggle();
      // Populate the input.
    }
    // else {
    //   // Show the hidden fields.
    //   $("#t3").hide().prop('required',false)
    //   // Populate the input.
    // }
    if (id == 4) {
      // Show the hidden fields.
      $("#t4").toggle();
      // Populate the input.
    }
    // else {
    //   // Show the hidden fields.
    //   $("#t4").hide().prop('required',false)
    //   // Populate the input.

    if (id == 5) {
      // Show the hidden fields.
      $("#t5").toggle();
      // Populate the input.
    }
    // else {
    //   // Show the hidden fields.
    //   $("#t5").hide().prop('required',false)
    //   // Populate the input.
    // }


  }



  handleSubmit = (event) => {
    event.preventDefault();
    var frmData = $(":input").serializeArray();
    console.log(frmData);
    // We need to the id of the loggedIn user
    this.props.handleSubmit(frmData, 1);
    /* if (this.props.user.isLoggedIn) {
      console.log("The user logged in is: ", this.props.user.userId);
    } */
    //this.props.handleSubmit(frmData, this.props.user.userId);

  }

  render() {


    return (

      <div className="container create-survey-container" style={{ width: '700px' }} >
        <div className="jumbotron">
          <form onSubmit={this.handleSubmit}>
            <div id="123d" className={'form-group'}>
              <label htmlFor="title">Survey Title</label>
              <input type="title" className="form-control" name="title" required /><br />

              <label htmlFor="description">Survey Description</label>
              <textarea className="form-control" name="description" placeholder="Survey Description" required></textarea><br />

              <label htmlFor="surveyPrivacy">Survey Privacy</label><br />
              <div className="row">
                <div className="col">
                  <label><input className="form-check" type="radio" name="privacy" value="2" /> Private Survey</label>
                </div>
                <div className="col">
                  <label><input className="form-check" type="radio" name="privacy" value="1" defaultChecked /> Open Survey</label><br /><br />
                </div>
              </div>


              <label htmlFor="type">Add Question Title</label><br />
              <label className='check'><input type="checkbox" style={{ width: '20px', display: 'inline-block' }} value="1" id="multi" className="form-control" name="type" onChange={() => this.setVisibility("#multi", "#t1")} /> Multiple Chioce</label><br />
              <div className='new' id="t1" style={{ display: 'none' }}>
                <input name="questionText" type="text" placeholder="Question Title (i.e. What do you like best? )" style={{ width: '500px' }}   ></input>
                <input name="answerText" type="text" placeholder="answerText (i.e. apples, pie, chicken, ... )" style={{ width: '500px' }}   ></input>
              </div>

              <label className='check'><input style={{ width: '20px', display: 'inline-block' }} type="checkbox" color="blue " value="2" id="yn" className="form-control" name="type" onChange={() => this.setVisibility("#yn", "#t2")} />Yes or No Question</label><br />
              <div className='new' id="t2" style={{ display: 'none' }}>
                <input name="questionText" type="text" placeholder="Question Title (i.e. Do you like apples?) " style={{ width: '500px' }}   ></input>
                <input name="answerText" value="Yes, No, Maybe" readOnly hidden />
              </div>

              <label className='check'><input type="checkbox" style={{ width: '20px', display: 'inline-block' }} value="3" id="agree" className="form-control" name="type" onChange={() => this.setVisibility("#agree", "#t3")} />Strongly Agree-Strongly Disagree Question</label><br />
              <div className='new' id="t3" style={{ display: 'none' }}>
                <input name="questionText" type="text" placeholder="Question Title (i.e. Product is easy to use )" style={{ width: '500px' }}   ></input><br />
                <input name="answerText" value="Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree" readOnly hidden />
              </div>

              <label className='check'><input style={{ width: '20px', display: 'inline-block' }} type="checkbox" value="4" id="rating" className="form-control" name="type" onChange={() => this.setVisibility("#rating", "#t4")} />Rating</label><br />
              <div className='new' id="t4" style={{ display: 'none' }}>
                <input name="questionText" type="text" placeholder="Question Title (i.e. How likely are you to recommend our product to a friend? )" style={{ width: '500px' }}   ></input>
                <input name="answerText" value="1, 2, 3, 4, 5" readOnly hidden />
              </div>

              <label className='check'><input type="checkbox" style={{ width: '20px', display: 'inline-block' }} value="5" id="feedback" className="form-control" name="type" onChange={() => this.setVisibility("#feedback", "#t5")} />Feedback</label><br />
              <div className='new' id="t5" style={{ display: 'none' }}>
                <input name="questionText" type="text" placeholder="Question Title (i.e. Please give your feedback)" style={{ width: '500px' }}    ></input>
              </div>

              <div className="form-group">
                <br /><br /><button type="submit" className="btn btn-primary">Create Survey</button>
                <Link to="http://localhost:3000" className="btn btn-link">Cancel</Link>
              </div>
            </div>
          </form>
          <p>{this.props.errorMessage}</p>
        </div>
      </div>
    );
  }
}


export default SurveyBuildComponent;