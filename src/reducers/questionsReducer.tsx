import {SurveyQuestions} from './index'



const initialState: SurveyQuestions={
    
    questions: [ { type: "matrix", name: "", title: "",
                columns: [{ value: 1, text: "" },
                { value: 2, text: "" },
                { value: 3, text: "" },
                { value: 4, text: "" },
                { value: 5, text: "" }],
                rows: [{ value: "", text: "" },
                { value: "", text: "" },
                { value: "", text: "" },
                { value: "", text: "" }]}]
        //   EXAMPLE           { value: "easy to use", text: "Product is easy to use" }]}
 
    };


export const questionsReducer = (state = initialState, action: any) => {
//chane question type he
switch(action.type){



}

return state;


}
