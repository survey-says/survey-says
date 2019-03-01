import ssContext from "./ss.context";

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

            // Append Privacy to the Surveys
            await ssContext.get(`privacies/${survey.privacy}`)
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

            // Append Privacy to the Surveys
            await ssContext.get(`privacies/${survey.privacy}`)
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
        await ssContext.get(`questions/survey/${id}`)
            .then(response => {
                survey.questions = response.data;
                survey.questions.forEach(async (question) => {
                    ssContext.get(`answer-choices/question/${id}`)
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

        // Append Privacy to the Survey
        await ssContext.get(`privacies/${survey.privacy}`)
            .then(response => {
                survey.privacy = response.data;
            })
            .catch(err => {
                console.log(err);
            });

        return survey;
    },

    findSurveysByModerator: async (ModeratorId) => {
        let surveys: any[] = [];
        let allSurveys;
        let surveyJunction;
        // Get all of the junctions for the specified user
        await ssContext.get(`junctions/user/${ModeratorId}`)
            .then(response => {
                surveyJunction = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        // Get all of the surveys
        await ssContext.get('surveys')
            .then(response => {
                allSurveys = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        // Loop through the junctions for the specified user
        surveyJunction.forEach(junction => {
            // If the user is moderator
            if (junction.role === 2) {
                // Loop through all of the surveys
                allSurveys.forEach(async (survey) => {
                    // If the survey is the one specified the junction, grab it
                    if (junction.survey === survey.surveyId) {
                        // Add the survey to the list of surveys that will be returned
                        surveys.push(survey);
                        // Append Creator to the Surveys
                        await ssContext.get(`users/${survey.creator}`)
                            .then(response => {
                                survey.creator = response.data;
                            })
                            .catch(err => {
                                console.log(err);
                            });

                        // Append Privacy to the Surveys
                        await ssContext.get(`privacies/${survey.privacy}`)
                            .then(response => {
                                survey.privacy = response.data;
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    };
                });
            };
        });
        return surveys;
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
        await ssContext.post('questions', newQuestion)
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
        await ssContext.post('answer-choices', newAnswerChoice)
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
        await ssContext.post('responses', newResponse)
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
