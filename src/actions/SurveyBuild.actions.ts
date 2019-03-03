import ssClient from "../axios/ss.client";
import { prepNewSurvey } from "../parser/parser";

export const surveyBuildTypes = {
  SUBMIT: 'SUBMIT',
  SUBMIT_FAILED: 'SUBMIT_FAILED',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  CLEAR_SURVEY: 'CLEAR_SURVEY'
}

export const handleSubmit = (newSurvey: [], userId: number) => async (dispatch) => {
  console.log("The survey passed in is: ");
  console.log(newSurvey);
  // Parse data
  let parsedSurveySet = prepNewSurvey(newSurvey, userId);

  // Add userId to then save survey get surveyId
  try {
    parsedSurveySet[0]['creator'] = userId;
    let questionIds: [any] = [0];
    let questionCount = 0;
    questionIds.pop();
    console.log('The survey to be submitted to db is: ', parsedSurveySet[0]);
    const surveyId = await ssClient.addSurvey(parsedSurveySet[0]);
    if (surveyId) {
      console.log("The survey ID is: ", surveyId);

      // Attach surveyId to each question and save question
      parsedSurveySet[1].forEach(async question => {
        question['survey'] = surveyId;
        let questionId = await ssClient.addQuestion(question);
        if (questionId) {
          console.log("The question id is ", questionId);
          questionIds[questionCount++] = questionId;
        } else {
          throw "Error submitting question"
        }
      });
      const choices = parsedSurveySet[2];
      console.log("The question array is ", questionIds);
      for (let index = 0; index < choices.length; index++) {
        let temp = choices[index]['answerText'].split(',');
        console.log("Temp array is: ", temp);
        temp.forEach(async choice => {
          // Add question id to each choice
          let tempObj = {
            answerText: choice,
            question: questionIds[index]
          }
          console.log("The temp object is ", tempObj);
          let choiceId = await ssClient.addAnswerChoice(tempObj);
          if (!choiceId) {
            throw "Error submitting choice"
          }
        });
      }
      dispatch({
        payload: {
          errorMessage: "Submit was succesful"
        },
        type: surveyBuildTypes.SUBMIT_SUCCESS
      })
    }
  } catch (error) {
    console.log(error)
    dispatch({
      payload: {
        errorMessage: "Submit failed"
      },
      type: surveyBuildTypes.SUBMIT_FAILED
    })
  }


  /* return {
    payload: {
      errorMessage: "Submit was succesful"
    },
    type: surveyBuildTypes.SUBMIT_SUCCESSFUL
  } */
} 