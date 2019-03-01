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
      this.see(value)
     }
     see=(event)=>{
      return event
     }
     
     

     setVisibility=(id) =>{
        
        
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
     
  
    

    

        }
      
    render() {
     

        return (   
       
            <div className="container create-survey-container" style={{width: '700px'}} >
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
              <div className="jumbotron"> 
                    <h1 className="h3 mb-3 font-weight-normal">Build Your Survey</h1>
                    
                    <form  name="form1" className="form-create">
                        <div id="123d"className={'form-group'}>
                        
                            <label htmlFor="surveyTitle">SurveyTitle</label>
                            <input type="surveyTitle" className="form-control" name="surveyTitle" onChange={this.handleChange}  /><br></br>
                            
                            <input name="inputt" ref="selectNum" type="text" placeholder="# of Questions" style={{width: '100px'}} ></input>&nbsp;&nbsp;&nbsp;&nbsp;
                            <select ref="selectValue"  name="Question Types" id='Qtypes' onChange ={()=>this.check}>
                            <option value="open">Please Select Your Type To Add</option>
                           <option value="multi">Multiple Choice</option>
                           <option value="yn">Yes or No Question</option>
                            <option value="agree">Strongly Agree-Strongly Disagree Mini Form</option>
                          <option value="feedback">Feedback Comment Block</option>
                          <option value="rating">Rating</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;
                            
                            <div id="allQ"style={{textAlign:'center'}}>
                            
                            </div>
                             
                             <div  className='new' id="t1" style={{display:'none'}}>
                            
                           <input   id= "Qtitle1" name="Qtitle" type="text" placeholder="Question Title (i.e. What do you like best? )" style={{width: '500px'}} ></input>
                           <input ref="Choice" name="choice" type="text" id='Choice1' placeholder="Choices (i.e. apples, pie, chicken, ... )"  style={{width: '500px'}} ></input>
                           </div>

                           <div className='new' id="t2" style={{display:'none'}}>
                           
                           <input  name="Qtitle"  id= "Qtitle2"type="text" placeholder="Question Title (i.e. Do you like apples?) "   style={{width: '500px'}} ></input>
                           </div>

                            <div className='new' id="t3" style={{display:'none'}}>
                          
                           <input name="Qtitle" type="text"  id= "Qtitle3"  placeholder="Question Title (i.e. Give me your opinion )" style={{width: '500px'}}   ></input><br></br>
                           <input ref="Choice"  id='Choice1'  name="choice" type="text"  placeholder="Text (i.e. Product is affordable )"  style={{width: '500px'}}   ></input>
                           <input ref="Choice"  id='Choice1'  name="choice" type="text"  placeholder="Text (i.e. Product is does what it says )"  style={{width: '500px'}}   ></input>
                           <input ref="Choice"  id='Choice1'  name="choice" type="text"  placeholder="Text (i.e.Product looks like its picture )" style={{width: '500px'}}    ></input>
                           <input ref="Choice"  id='Choice1'  name="choice" type="text"  placeholder="Text (i.e. Product is easy to use )"  style={{width: '500px'}}   ></input><br></br>
                        </div>

                             <div   className='new' id="t4" style={{display:'none'}}>
                           
                           <input name="Qtitle"   id= "Qtitle4"type="text" placeholder="Question Title (i.e. How likely are you to recommend our product to a friend? )"  style={{width: '500px'}}   ></input>
                           </div>

                          <div className='new' id="t5" style={{display:'none'}}>
                           <input name="Qtitle"  id= "Qtitle5" type="text" placeholder="Question Title (i.e. Please give your feedback)"  style={{width: '500px'}}    ></input>
                           </div>   
                        
                           </div>
                           
                      
                        <div className="form-group">
                        <br></br><br></br><button type="submit"onClick={this.handleSubmit} form="form1" className="btn btn-primary">Create Survey</button>

                            <Link to="http://localhost:3000"  className="btn btn-link">Cancel</Link>
                        </div>

                    </form>
                </div>
            </div>
        );
    }

}


export default SurveyBuildComponent;