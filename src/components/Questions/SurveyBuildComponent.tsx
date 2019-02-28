import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import $ from "jquery";
import { string } from 'prop-types';

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


     setVisibility=(id, box) =>{
        let checkbox = $(id);
        let hidden = $(box);
        
        if (checkbox.is(':checked')) {
            // Show the hidden fields.
            hidden.show();
            // Populate the input.
          } else {
            // Make sure that the hidden fields are indeed
            // hidden.
            hidden.hide();
    
    }
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
        
            <div className="container create-survey-container"> 
              <div className="jumbotron"> 
                    <h1 className="h3 mb-3 font-weight-normal">Build Your Survey</h1>
                    <form name="form" onSubmit={this.handleSubmit} className="form-create">
                        <div className={'form-group'}>
                        
                            <label htmlFor="surveyTitle">SurveyTitle</label>
                            <input type="surveyTitle" className="form-control" name="surveyTitle" onChange={this.handleChange} required /><br></br>
                        
                            <label htmlFor="questionTypes">Add Question Types</label><br></br>
                            

                            <label className='check'><input type="checkbox"  value="1" id="multi" className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#multi','#t1' ))} required />Multiple Chioce</label>
                            <div  className='new' id="t1" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. What do you like best? )" style={{width: '700px'}} required></input>
                           <input name="inputt" type="text"  placeholder="Choices (i.e. apples, pie, chicken, ... )"  style={{width: '700px'}} required></input>
                           </div>

                            <label className='check'><input type="checkbox" value="2" id="yn"className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#yn','#t2'))} required />Yes or No Question</label>                       
                            <div className='new' id="t2" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. Do you like apples?) "   style={{width: '700px'}} required></input>
                           </div>

                            <label className='check'><input type="checkbox"  value="3"id="agree"className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#agree','#t3'))} required />Strongly Agree-Strongly Disagree Form</label>                      
                            <div className='new' id="t3" style={{display:'none'}}>
                           <input name="inputt" type="text"  placeholder="Question Title (i.e. Give me your opinion )" style={{width: '700px'}}  required></input><br></br>
                           <input name="inputt" type="text"  placeholder="Value (i.e. Average, Good, Ok, Bad )" style={{width: '700px'}}   required></input>
                           <input name="inputt" type="text"  placeholder="Value (i.e. Average, Good, Ok, Bad )"  style={{width: '700px'}}  required></input>
                           <input name="inputt" type="text"  placeholder="Value (i.e. Average, Good, Ok, Bad )"  style={{width: '700px'}}  required></input>
                           <input name="inputt" type="text"  placeholder="Value (i.e. Average, Good, Ok, Bad )"  style={{width: '700px'}}  required></input> <br></br>
                           <input name="inputt" type="text"  placeholder="Text (i.e. Product is affordable )"  style={{width: '700px'}}  required></input>
                           <input name="inputt" type="text"  placeholder="Text (i.e. Product is does what it says )"  style={{width: '700px'}}  required></input>
                           <input name="inputt" type="text"  placeholder="Text (i.e.Product looks like its picture )" style={{width: '700px'}}   required></input>
                           <input name="inputt" type="text"  placeholder="Text (i.e. Product is easy to use )"  style={{width: '700px'}}  required></input><br></br>
                        </div>

                            <label className='check'><input type="checkbox"  value="4"id="rating"className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#rating','#t4'))} required />Rating</label>                       
                            <div className='new' id="t4" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. How likely are you to recommend our product to a friend? )"  style={{width: '700px'}}  required></input>
                           </div>

                            <label className='check'><input type="checkbox" value="5" id="feedback"className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#feedback','#t5'))}required />Feedback Comment</label>                     
                            <div className='new' id="t5" style={{display:'none'}}>
                           <input name="inputt" type="text" placeholder="Question Title (i.e. Please give your feedback)"  style={{width: '700px'}}   required></input>
                           </div>
                            </div>
                       
                        
                        <div className="form-group">
                            <button className="btn btn-primary">Create Survey</button>

                            <Link to="http://localhost:3000" className="btn btn-link">Cancel</Link>
                        </div>

                    </form>
                </div>
            </div>
        );
    }

}


export default SurveyBuildComponent;