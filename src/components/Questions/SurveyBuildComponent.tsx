import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import $ from "jquery";
import { string } from 'prop-types';
import ssClient from '../../axios/ss.client';
import { ReactComponent } from '*.svg';
const ReactDOM = require('react-dom')



export interface ISurveyProps {
    surveyTitle: string,
    questionTypes: string,
    handleSubmit(userInfo: {}): void
  

}

 
export class SurveyBuildComponent extends React.Component<ISurveyProps, any> {
    constructor(props) {
        super(props);
        this.displayData = []
        this.state = {
            showdata : this.displayData,
            postVal : ""
          }
   
  }
    displayData = []

    handleChange = (event) => {
      let script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);

    }
    check=(event)=>{
      let value = ReactDOM.findDOMNode(this.refs.selectValue).value;
     console.log(value)
    this.setVisibility(value)

    }
    
 
     

    setVisibility=(id) =>{
      let checked =id
          if (id==='multi') {
            // Show the hidden fields.
            $("#t1").show();
            // Populate the input.
          }
         else {
            // Show the hidden fields.
            $("#t1").hide().prop('required',false)
            // Populate the input.
          }
          
          if (id==='yn') {
            // Show the hidden fields.
            $("#t2").show();
            // Populate the input.
          }else {
            // Show the hidden fields.
            $("#t2").hide().prop('required',false)
            // Populate the input.
          }
          if (id==='agree') {
            // Show the hidden fields.
            $("#t3").show();
            // Populate the input.
          } 
          else {
            // Show the hidden fields.
            $("#t3").hide().prop('required',false)
            // Populate the input.
          }
           if (id==='rating') {
            // Show the hidden fields.
            $("#t4").show();
            // Populate the input.
          }
          else {
            // Show the hidden fields.
            $("#t4").hide().prop('required',false)
            // Populate the input.
          }
           if (id==='feedback') {
            // Show the hidden fields.
            $("#t5").show();
            // Populate the input.
          }
          else {
            // Show the hidden fields.
            $("#t5").hide().prop('required',false)
            // Populate the input.
          }

 
}



        handleSubmit=(event)=>{
       var frmData = $(":input").serializeArray()
     
  
    console.log(frmData)

        }
      
    render() {
     

        return (   
       
            <div className="container create-survey-container" style={{width: '700px'}} >
               <div className="jumbotron">
               <form>
               <div id="123d"className={'form-group'}>
               <label htmlFor="surveyTitle">SurveyTitle</label>
                            <input type="surveyTitle" className="form-control" name="surveyTitle" onChange={this.handleChange} required /><br></br>

                            <label htmlFor="questionTypes">Add Question Types</label><br></br>


                            <label className='check'><input ref="selectValue" type="checkbox"style={{width:'20px',display: 'inline-block'}}  value="1" id="multi" className="form-control" name="questionTypes" onChange={this.check} required />Multiple Chioce</label><br></br>
                            <div  className='new' id="t1" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. What do you like best? )" style={{width: '700px'}} required></input>
                           <input name="inputt" type="text"  placeholder="Choices (i.e. apples, pie, chicken, ... )"  style={{width: '700px'}} required></input>
                      </div>
                      <label className='check'><input ref="selectValue"style={{width:'20px',display: 'inline-block'}} type="checkbox" value="2" id="yn"className="form-control" name="questionTypes"onChange={this.check} required />Yes or No Question</label>     <br></br>                  
                            <div className='new' id="t2" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. Do you like apples?) "   style={{width: '700px'}} required></input>

</div>
<label className='check'><input type="checkbox"ref="selectValue" style={{width:'20px',display: 'inline-block'}} value="3"id="agree"className="form-control" name="questionTypes"onChange={this.check} required />Strongly Agree-Strongly Disagree Form</label>   <br></br>                   
                          
                           <div className='new' id="t3" style={{display:'none'}}>
                           <input name="inputt" type="text"  placeholder="Question Title (i.e. Give me your opinion )" style={{width: '500px'}}   ></input><br></br>
                           <input name="inputt" type="text"  placeholder="Value (i.e. Average, Good, Ok, Bad )" style={{width: '500px'}}    ></input>
                           <input name="inputt" type="text"  placeholder="Value (i.e. Average, Good, Ok, Bad )"  style={{width: '500px'}}   ></input>
                           <input name="inputt" type="text"  placeholder="Value (i.e. Average, Good, Ok, Bad )"  style={{width: '500px'}}   ></input>
                           <input name="inputt" type="text"  placeholder="Value (i.e. Average, Good, Ok, Bad )"  style={{width: '500px'}}   ></input> <br></br>
                           <input name="inputt" type="text"  placeholder="Text (i.e. Product is affordable )"  style={{width: '500px'}}   ></input>
                           <input name="inputt" type="text"  placeholder="Text (i.e. Product is does what it says )"  style={{width: '500px'}}   ></input>
                           <input name="inputt" type="text"  placeholder="Text (i.e.Product looks like its picture )" style={{width: '500px'}}    ></input>
                           <input name="inputt" type="text"  placeholder="Text (i.e. Product is easy to use )"  style={{width: '500px'}}   ></input><br></br>
                        </div>
                        <label className='check'><input ref="selectValue" style={{width:'20px',display: 'inline-block'}} type="checkbox"  value="4"id="rating"className="form-control" name="questionTypes"onChange={this.check}required />Rating</label>      <br></br>                 

                        <div   className='new' id="t4" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. How likely are you to recommend our product to a friend? )"  style={{width: '500px'}}   ></input>
                           </div>
                           <label className='check'><input ref="selectValue" type="checkbox" style={{width:'20px',display: 'inline-block'}}value="5"id="feedback"className="form-control" name="questionTypes"onChange={this.check}required />Feedback</label>  <br></br>                     

                       <div className='new' id="t5" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. Please give your feedback)"  style={{width: '500px'}}    ></input>
                           </div>   
                           <div className="form-group">
                         <br></br><br></br><button onClick={this.handleSubmit} className="btn btn-primary">Create Survey</button>

                            <Link to="http://localhost:3000" className="btn btn-link">Cancel</Link>
                        </div>


            </div>



                 </form> 
               </div>
            </div>
        );
    }

}


export default SurveyBuildComponent;