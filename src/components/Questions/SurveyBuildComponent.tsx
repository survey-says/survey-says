import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import $ from "jquery";
import { string } from 'prop-types';

export interface IRegisterProps {
    surveyTitle: string,
    questionTypes: string,
    handleSubmit(userInfo: {}): void
}

export class SurveyBuildComponent extends React.Component<IRegisterProps, any> {
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
       
          let joined=yourArray.join() 
         

          
        
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

        //  switch (joined) {
              
             
        //     case "1,1,4,3,2":   sortedHand.push(1,"Pair"); break;
        //     case "1,1,5,3,2": sortedHand.push(2,"Pair"); break; 
        //     case "1,1,5,4,2": sortedHand.push(3,"Pair"); break;
        //     case "1,1,5,4,3": sortedHand.push(4,"Pair"); break;
        //     case "1,1,6,3,2": sortedHand.push(5,"Pair"); break;
        //     case "1,1,6,4,2": sortedHand.push(6,"Pair"); break;
        //     case "1,1,6,4,3": sortedHand.push(7,"Pair"); break;
        //     case "1,1,6,5,2": sortedHand.push(8,"Pair"); break;
        //     case "1,1,6,5,3": sortedHand.push(9,"Pair"); break;
        //     case "1,1,6,5,4": sortedHand.push(10,"Pair"); break;
            
        // }
       
    }


     setVisibility=(id, visibility) =>{
        
        let style=new String($(id).attr('style'))
        
        if(style.includes("none")){
           
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
                            

                            <label><input type="checkbox"  value="1" id="multi" className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#t1', 'inline'))} required />Multiple Chioce</label>
                            <input id="t1" name="inputt" type="text" style={{display: 'none'}} required></input>

                            <label><input type="checkbox" value="2" id="yn"className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#t2', 'inline'))} required />Yes or No Question</label>                       
                            <input id="t2" name="inputt" type="text" style={{display: 'none'}} required></input>

                            <label><input type="checkbox"  value="3"id="agree"className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#t3', 'inline'))} required />Strongly Agree-Strongly Disagree Form</label>                      
                            <input id="t3" name="inputt" type="text" required  style={{display: 'none'}}></input>

                            <label><input type="checkbox"  value="4"id="rating"className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('#t4', 'inline'))} required />Rating</label>                       
                            <input id="t4" name="inputt" type="text" style={{display: 'none'}} required></input>

                            <label><input type="checkbox" value="5" id="feedback comment"className="form-control" name="questionTypes" onChange={()=>(this.handleChange,this.setVisibility('@t5', 'inline'))}required />Feedback Comment</label>                     
                            <input id="t5" name="inputt" type="text" style={{display: 'none'}} required></input>
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