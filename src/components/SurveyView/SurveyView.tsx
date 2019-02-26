import React, { Component } from 'react';

export default class SurveyView extends Component<any, any>{
    constructor(props) {
        super(props);

        // Hard coded state just for testing this component. This will be removed once the db is connected
        this.state = {
            survey: {
                title: 'Favorite Food Survey',
                questions: [
                    {
                        id: 1,
                        title: 'What is your favorite cuisine?',
                        choices: ['Chinese', 'Cuban', "Italian"]
                    },
                    {
                        id: 2,
                        title: 'What is the best form of potato?',
                        choices: ['Boiled', 'French Fries', 'Mashed', 'Hash Browns', 'Curly Fries']
                    }
                ]
            }
        }
    }

    // Needs Method for pulling in data from the survey and response data tables
    // Needs method  for submitting data

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2 className="mb-3">{this.state.survey.title}</h2>
                    <form>
                        {this.state.survey.questions.map(question => (
                            <div key={question.id} className="card form-group mb-3">
                                <h5 className="card-header">{question.title}</h5>
                                <div className="card-body">
                                    {question.choices.map((choice, index) => (
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name={`question-${question.id}-choice`} value={`option-${index}`} />
                                            <label className="form-check-label">
                                                {choice} </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div >
        )
    }
}