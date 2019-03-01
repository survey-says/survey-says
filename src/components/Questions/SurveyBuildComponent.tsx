import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import $ from "jquery";
import { string } from 'prop-types';
import ssClient from '../../axios/ss.client';
const ReactDOM = require('react-dom')


export interface ISurveyProps {
    surveyTitle: string,
    questionTypes: string,
    handleSubmit(userInfo: {}): void
}

 
export class SurveyBuildComponent extends React.Component<ISurveyProps, any> {
    constructor(props) {
        super(props);
    }
  

    

    handleChange = (event) => {
        let yourArray= new Array()
        var hidden = $("input:text[name=inputt]");
        $("input:checkbox[name=questionTypes]:checked").each(function(){
            yourArray.push($(this).val());
                  hidden.show()

  });

        //gets an array of the checkbox choices
       // console.log("my choices"+yourArray.join())
       
          let finalChoices=yourArray.join() 
         

          
        
           let get=["1","2","3","4","5"] //there are 5 questions these will get all possible combiinations of values 1-5
           let  getCombinations=(chars)=> {
            var result = new Array();
            var f = function(prefix, chars) {
              for (var i = 0; i < chars.length; i++) {
                result.push(prefix + chars[i]);
                f(prefix + chars[i], chars.slice(i + 1));
              }
            }
            f('', chars);
            return result;
          }
          let combo=  getCombinations(get);

       
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

    
        addQuestion=(id)=>{            
            var my_var = $(id).html();
         console.log(my_var)
           $(id).clone(true).appendTo("#123d");
         
        }

    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            surveyTitle: this.props.surveyTitle,
            questionTypes: this.props.questionTypes,
        }
        console.log('The user survey being registered is ', userData);
        this.props.handleSubmit(userData);
   


   
   
    }

    render() {
        return (   
        
            <div className="container create-survey-container" style={{width: '700px'}} > 
              <div className="jumbotron"> 
                    <h1 className="h3 mb-3 font-weight-normal">Build Your Survey</h1>
                    
                    <form  name="form" onSubmit={this.handleSubmit} className="form-create">
                        <div id="123d"className={'form-group'}>
                        
                            <label htmlFor="surveyTitle">SurveyTitle</label>
                            <input type="surveyTitle" className="form-control" name="surveyTitle" onChange={this.handleChange} required /><br></br>
                        
                            <label htmlFor="questionTypes">Add Question Types</label><br></br>
                            
                            
                            <div id="allQ"style={{textAlign:'center'}}>
                            <select ref="selectValue"  name="Question Types" id='Qtypes' onChange={this.check}>
                            <option value="open">Please Select Your Type To Add</option>
                           <option value="multi">Multiple Choice</option>
                           <option value="yn">Yes or No Question</option>
                            <option value="agree">Strongly Agree-Strongly Disagree Mini Form</option>
                          <option value="feedback">Feedback Comment Block</option>
                          <option value="rating">Rating</option>
                            </select>&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                           
                             <div  className='new' id="t1" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. What do you like best? )" style={{width: '500px'}} ></input>
                           <input name="inputt" type="text"  placeholder="Choices (i.e. apples, pie, chicken, ... )"  style={{width: '500px'}} ></input>
                           </div>

                           <div className='new' id="t2" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. Do you like apples?) "   style={{width: '500px'}} ></input>
                           </div>

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

                             <div   className='new' id="t4" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. How likely are you to recommend our product to a friend? )"  style={{width: '500px'}}   ></input>
                           </div>

                          <div className='new' id="t5" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. Please give your feedback)"  style={{width: '500px'}}    ></input>
                           </div>   
                            

                            </div>
                       <div style={{textAlign:'center'}}><button name="theB" className="btn btn-primary"  onClick={()=>this.addQuestion("#allQ")}>Add Another  </button>
                            </div>
                        
                        <div className="form-group">
                        <br></br><br></br><button className="btn btn-primary">Create Survey</button>

                            <Link to="http://localhost:3000" className="btn btn-link">Cancel</Link>
                        </div>

                    </form>
                </div>
            </div>
        );
    }

}


export default SurveyBuildComponent;