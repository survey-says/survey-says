
export const prepNewSurvey = (rawSurvey: [], userId: number): {} => {
  let parsedSurvey = {};
  let questionObject = { questionText: '', type: '' };
  let parsedQuestions: [any] = [0];
  let choiceObject = { answerText: '' };
  let parsedChoices: [any] = [0];
  let today = new Date();
  let closeDate: Date = new Date();
  parsedChoices.pop();
  parsedQuestions.pop();

  // As of now you will need to fill out all questions in order for the values to be added correctly

  closeDate.setDate(closeDate.getDate() + 7);
  let todayfullDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  let defaultCloseDate = `${closeDate.getFullYear()}-${closeDate.getMonth()}-${closeDate.getDate()}`;
  let questionCount = 0;
  let questionObjCount = 0;
  /* 
   questionObject[item['name']] = item['value']
   parsedQuestions.push(questionObject);
  */
  /* 
   case 'questionTypes':
   case 'questionText':
     parsedQuestions[item['name'] + questionCount++] = item['value'];
     break;
      */
  /* 
       if (questionObjCount >= 2) {
        let temp = JSON.parse(JSON.stringify(questionObject));
        questionObjCount = 0;
        console.log('The question object to be pushed into the array is ', questionObject)
        parsedQuestions.push(temp);
      } else {
        questionObject[item['name']] = item['value'];
        questionObjCount++;
      }
       */
  rawSurvey.forEach(item => {
    if (item['value']) {
      switch (item['name']) {
        case 'surveyTitle':
        case 'surveyDescription':
        case 'privacy':
          parsedSurvey[item['name']] = item['value'];
          break;
        case 'type':
        case 'questionText':
          if (questionObjCount < 2) {
            questionObject[item['name']] = item['value'];
            questionObjCount++;
            if (questionObjCount >= 2) {
              let temp = JSON.parse(JSON.stringify(questionObject));
              questionObjCount = 0;
              console.log('The question object to be pushed into the array is ', questionObject)
              parsedQuestions.push(temp);
            }
          }
          break;
        case 'answerText':
          choiceObject[item['name']] = item['value'];
          parsedChoices.push(JSON.parse(JSON.stringify(choiceObject)));
        default:
          break;
      }
      console.log("The item is ", item['value']);

    }
  });

  parsedSurvey['dateCreated'] = todayfullDate;
  parsedSurvey['closingDate'] = defaultCloseDate;
  parsedSurvey['privacy'] = parseInt(parsedSurvey['privacy']);
  console.log("The survey element returning: ", parsedSurvey);
  console.log("The question element returning: ", parsedQuestions);
  console.log("The choice element returning: ", parsedChoices);
  return [parsedSurvey, parsedQuestions, parsedChoices];
}
