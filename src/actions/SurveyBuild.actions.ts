import ssClient from "../axios/ss.client";
import { prepNewSurvey } from "../parser/parser";

export const surveyBuildTypes = {
  SUBMIT: 'SUBMIT',
  SUBMIT_FAILED: 'SUBMIT_FAILED',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  CLEAR_SURVEY: 'CLEAR_SURVEY'
}

export const handleSubmit = (newSurvey: [], userId: number) => async (dispatch) => {
  // Parse data
  let parsedSurveySet = prepNewSurvey(newSurvey, userId);

  // Add userId to then save survey get surveyId
  try {
    parsedSurveySet[0]['creator'] = userId;
    let addedSurveyId;
    await ssClient.addSurvey(parsedSurveySet[0])
      .then(response => {
        addedSurveyId = response.surveyId;
      });
    if (addedSurveyId) {
      // Attach surveyId to each question and save question
      let choices = parsedSurveySet[2];
      await parsedSurveySet[1].forEach(async (question, index) => {
        question['survey'] = addedSurveyId;
        await ssClient.addQuestion(question)
          .then(response => {
            let questionId = parseInt(response.questionId);
            if (questionId) {
              if (index < 4) {
                let temp = [];
                temp = choices[index]['answerText'].split(',');
                for (let tempKey in temp) {
                  // Add question id to each choice
                  let tempObj = {
                    answerText: temp[tempKey],
                    question: questionId
                  }
                  ssClient.addAnswerChoice(tempObj);
                };
              }
            } else {
              throw "Error submitting question"
            }
          });
      });
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
} 