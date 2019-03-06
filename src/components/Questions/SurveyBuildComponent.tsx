import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import $ from "jquery";
import { IUserState } from '../../reducers';
const ReactDOM = require('react-dom')



export interface ISurveyBuildProps {
  user: IUserState,
  surveyTitle: string,
  type: string,
  errorMessage: string,
  newSurvey: {},
  handleSubmit(newSurvey: {}, userId: number): void
}


export class SurveyBuildComponent extends React.Component<ISurveyBuildProps, any> {
  constructor(props) {
    super(props);
    //this.state = {
  //    redirectTo: null
  //  }
   this.state={
     inputs1: [{ input1: "" }],
     inputs2: [{ input2: "" }],
     inputs3: [{ input3: "" }],
     inputs4: [{ input4: "" }],
     inputs5: [{ input5: "" }]

  }

}





 

  handleChange = (event) => { 

  }

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
  
    if (id == 4) {
      // Show the hidden fields.
      $("#t4").toggle();
      // Populate the input.
    }

    if (id == 5) {
      // Show the hidden fields.
      $("#t5").toggle();
      // Populate the input.
    }
  

  }
  addQuestion1 = () => {

    this.setState({
      inputs1: this.state.inputs1.concat([{ input: "" }])
    });


  };
  addQuestion2 = () => {
    this.setState({
      inputs2: this.state.inputs2.concat([{ input: "" }])
    });
  };
  addQuestion3 = () => {
    this.setState({
      inputs3: this.state.inputs3.concat([{ input: "" }])
    });
  };
  addQuestion4 = () => {
    this.setState({
      inputs4: this.state.inputs4.concat([{ input: "" }])
    });
  };
  addQuestion5 = () => {
    this.setState({
      inputs5: this.state.inputs5.concat([{ input: "" }])
    });
  };

  removeQuestion1 = () => {
    this.setState({
      input1: this.state.inputs1[this.state.inputs1.length-1]=""
    });
  };




  handleSubmit = async (event) => {
    event.preventDefault();
    var frmData = $(":input").serializeArray();
    console.log(frmData);
    // We need to the id of the loggedIn user
    await this.props.handleSubmit(frmData, this.props.user.userId);
    this.setState({ redirectTo: '/home' })
  }

  render() {
    // if (this.state.redirectTo) {
    //   return <Redirect push to={this.state.redirectTo} />
    // }
    
    return (

      <div className="container create-survey-container" >
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


              <label htmlFor="type">Add Question Types</label><br />
              <button value="1" id="multi" onClick={() => this.setVisibility("#multi", "#t1")} className="form-control" name="type" type="button"   > Multiple Chioce </button><br></br>

            {this.state.inputs1.map((inputs) => (
          <div className="new"  id="t1">
          
              <input name="questionText" type="text" placeholder="Question Title (i.e. What do you like best? )" style={{ width: '500px' }}   ></input>
                <input name="answerText" type="text" placeholder="answerText (i.e. apples, pie, chicken, ... )" style={{ width: '500px' }}   ></input>
                <br></br>
              </div>
        ))}
        <button type="button" onClick={this.addQuestion1} className="small" >Add Another </button>  &nbsp;&nbsp;<button type="button" onClick={this.removeQuestion1} className="small" >Remove </button><br></br>

        <button value="2" id="yn" className="form-control" name="type" onChange={() => this.setVisibility("#yn", "#t2")}  > Yes/No  </button><br></br>
           {this.state.inputs2.map((inputs) => (
              
          <div className="new" id="t2">
         
             <input name="questionText" type="text" placeholder="Question Title (i.e. Do you like apples?) " style={{ width: '500px' }}   ></input>
                <input name="answerText" value="Yes, No, Maybe" readOnly hidden /> 
         </div>
        ))}
        <button type="button" onClick={this.addQuestion2} className="small" >Add Another </button><br></br>



        <button value="3" id="agree" className="form-control" name="type" onChange={() => this.setVisibility("#agree", "#t3")} > Strongly Agree-Disagree  </button><br></br>
       {this.state.inputs3.map((inputs) => (
          <div className="new" id="t3">
         
            <input name="questionText" type="text" placeholder="Question Title (i.e. Product is easy to use )" style={{ width: '500px' }}   ></input><br />
                <input name="answerText" value="Strongly Agree, Agree, Neutral, Disagree, Strongly Disagree" readOnly hidden />
                <br></br>
         </div>
        ))}
        <button type="button" onClick={this.addQuestion3} className="small" >Add Another </button><br></br>


        <button value="4" id="rating" className="form-control" name="type" onChange={() => this.setVisibility("#rating", "#t4")}>Rating  </button><br></br>
       {this.state.inputs4.map((inputs) => (
          <div className="new" id="t4">
          
            <input name="questionText" type="text" placeholder="Question Title (i.e. How likely are you to recommend our product to a friend? )" style={{ width: '500px' }}   ></input>
                <input name="answerText" value="1, 2, 3, 4, 5" readOnly hidden />
                <br></br>
              </div>
        ))}
        <button type="button" onClick={this.addQuestion4} className="small" >Add Another </button><br></br>


        <button value="5" id="feedback" className="form-control" name="type" onChange={() => this.setVisibility("#feedback", "#t5")} >Feedback</button><br></br>
      
              {this.state.inputs5.map((inputs) => (
          <div className="new" id="t5">
          
           <input name="questionText" type="text" placeholder="Question Title (i.e. Please give your feedback)" style={{ width: '500px' }}    >
           </input> 
           <br></br>
             </div>
        ))}
        <button type="button" onClick={this.addQuestion5} className="small" >Add Another </button><br></br>

              <div className="form-group">
                <br /><br /><button type="submit" className="btn btn-primary">Create Survey</button>
                <Link to="/home" className="btn btn-link">Cancel</Link>
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