import React from 'react'

export class addQ extends React.Component<any, any> {


    render(){

        return(
<>
<div className="container question-container" id="surveyContainer">
<input name="inputt" ref="selectNum" type="text" placeholder="# of Questions" style={{width: '100px'}} ></input>&nbsp;&nbsp;&nbsp;&nbsp;
<select ref="selectValue"  name="Question Types" id='Qtypes' >
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
 </> 
  ) 
   }
}

export default addQ;