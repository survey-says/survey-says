import { ssContext } from "./ss.context";

 const ssClient = {

     //----------------//
    //--User Methods--//
    //----------------//

     login: async (credentials: {}) => {
        let results;
        await ssContext.post('login', credentials)
            .then(response => {
                results = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    },

     findAllUsers: async () => {
        let results;
        await ssContext.get('users')
            .then(response => {
                results = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    },

     findUserById: async (id) => {
        let results;
        await ssContext.get(`users/${id}`)
            .then(response => {
                results = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    },

     addUser: async (newUser: {}) => {
        let results;
        await ssContext.post('users', newUser)
            .then(response => {
                results = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    },

     //------------------//
    //--Survey Methods--//
    //------------------//

     findAllSurveys: async () => {
        let surveys;
        await ssContext.get('surveys')
            .then(response => {
                surveys = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        surveys.forEach(async (survey) => {

             // Append Creator to the Surveys
            await ssContext.get(`users/${survey.creator}`)
                .then(response => {
                    survey.creator = response.data;
                })
                .catch(err => {
                    console.log(err);
                });

             // Append Status to the Surveys
            await ssContext.get(`status/${survey.status}`)
                .then(response => {
                    survey.status = response.data;
                })
                .catch(err => {
                    console.log(err);
                });

             // Append Privacy to the Surveys
            await ssContext.get(`privacy/${survey.privacy}`)
                .then(response => {
                    survey.privacy = response.data;
                })
                .catch(err => {
                    console.log(err);
                });
        });
        return surveys
    },

     findSurveysByStatus: async (statusId) => {
        let surveys;
        await ssContext.get(`surveys/status/${statusId}`)
            .then(response => {
                surveys = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        surveys.forEach(async (survey) => {

             // Append Creator to the Surveys
            await ssContext.get(`users/${survey.creator}`)
                .then(response => {
                    survey.creator = response.data;
                })
                .catch(err => {
                    console.log(err);
                });

             // Append Status to the Surveys
            await ssContext.get(`status/${survey.status}`)
                .then(response => {
                    survey.status = response.data;
                })
                .catch(err => {
                    console.log(err);
                });

             // Append Privacy to the Surveys
            await ssContext.get(`privacy/${survey.privacy}`)
                .then(response => {
                    survey.privacy = response.data;
                })
                .catch(err => {
                    console.log(err);
                });
        });
        return surveys
    },

     findSurveysByPrivacy: async (privacyId) => {
        let surveys;
        await ssContext.get(`surveys/privacy/${privacyId}`)
            .then(response => {
                surveys = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        surveys.forEach(async (survey) => {

             // Append Creator to the Surveys
            await ssContext.get(`users/${survey.creator}`)
                .then(response => {
                    survey.creator = response.data;
                })
                .catch(err => {
                    console.log(err);
                });

             // Append Status to the Surveys
            await ssContext.get(`status/${survey.status}`)
                .then(response => {
                    survey.status = response.data;
                })
                .catch(err => {
                    console.log(err);
                });

             // Append Privacy to the Surveys
            await ssContext.get(`privacy/${survey.privacy}`)
                .then(response => {
                    survey.privacy = response.data;
                })
                .catch(err => {
                    console.log(err);
                });
        });
        return surveys
    },

     findSurveyById: async (id: number) => {

         // Get the Survey
        let survey;
        await ssContext.get(`surveys/${id}`)
            .then(response => {
                survey = response.data;
            })
            .catch(err => {
                console.log(err);
            });

         // Append Questions to the Survey
        await ssContext.get(`question/survey/${id}`)
            .then(response => {
                survey.questions = response.data;
                survey.questions.forEach( async (question) => {
                    ssContext.get(`answer-choice/question/${id}`)
                        .then(response => {
                            question.answerChoices = response.data;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
            })
            .catch(err => {
                console.log(err);
            });

         // Append Creator to the Survey
        await ssContext.get(`users/${survey.creator}`)
            .then(response => {
                survey.creator = response.data;
            })
            .catch(err => {
                console.log(err);
            });

         // Append Status to the Survey
        await ssContext.get(`status/${survey.status}`)
            .then(response => {
                survey.status = response.data;
            })
            .catch(err => {
                console.log(err);
            });

         // Append Privacy to the Survey
        await ssContext.get(`privacy/${survey.privacy}`)
            .then(response => {
                survey.privacy = response.data;
            })
            .catch(err => {
                console.log(err);
            });

         return survey;
    },

     addSurvey: async (newSurvey: {}) => {
        let results;
        await ssContext.post('surveys', newSurvey)
            .then(response => {
                results = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    },

     //--------------------//
    //--Question Methods--//
    //--------------------//

     addQuestion: async (newQuestion: {}) => {
        let results;
        await ssContext.post('question', newQuestion)
            .then(response => {
                results = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    },

     //-------------------------//
    //--Answer Choice Methods--//
    //-------------------------//

     addAnswerChoice: async (newAnswerChoice: {}) => {
        let results;
        await ssContext.post('answer-choice', newAnswerChoice)
            .then(response => {
                results = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    },

     //--------------------//
    //--Response Methods--//
    //--------------------//

     addResponse: async (newResponse: {}) => {
        let results;
        await ssContext.post('response', newResponse)
            .then(response => {
                results = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        return results;
    }
}

 export default ssClient;