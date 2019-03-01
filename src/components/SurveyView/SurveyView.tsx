import React, { Component } from 'react';
import ssClient from '../../axios/ss.client';

export default class SurveyView extends Component<any, any>{
    constructor(props) {
        super(props);

        // Hard coded state just for testing this component. This will be removed once the db is connected
        this.state = {
            survey: {},
            surveyLoaded: false,
            responses: []
        }
    }

    // // Needs Method for pulling in data from the survey and response data tables
    componentDidMount = async () => {
        const survey = await ssClient.findSurveyById(1);
        this.setState({
            survey: survey,
            surveyLoaded: true
        })
    }

    // Updates state when the user selects an option
    handleResponseInput = event => {
        const { name, value } = event.target;
        var updatedResponses = this.state.responses.concat({ [name]: value });
        this.setState({
            responses: updatedResponses
        });
    };

    // Submits responses to the database
    handleSubmitResponses = (event) => {
        event.preventDefault();
        console.log("submitting responses");
        // this.state.responses.forEach(response => {
        //     const responseToSubmit = {"answerChosen": response.,}
        // });

        this.state.responses.forEach(element => {
            for (let key in element) {
                const responseToSubmit = {"answerChosen": element[key]};
                console.log("response to submit:",responseToSubmit);
                ssClient.addResponse(responseToSubmit);
            }
        });
    }

    render() {
        console.log("this.state", this.state);
        console.log("this.state.survey", this.state.survey);
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2 className="mb-3">{this.state.survey.title}</h2>
                    {this.state.surveyLoaded &&
                        <form>
                            {
                                this.state.survey.questions.map(question => (
                                    <div key={question.questionId} className="card form-group mb-3">
                                        <h5 className="card-header">{question.questionText}</h5>
                                        <div className="card-body">
                                            {question.answerChoices.map(choice => (
                                                <div key={choice.choiceId} className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name={`question-${question.questionId}-choice`}
                                                        value={choice.choiceId}
                                                        onChange={this.handleResponseInput}
                                                    />
                                                    <label className="form-check-label">
                                                        {choice.answerText} </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmitResponses}>Submit</button>
                        </form>
                    }
                </div>
            </div >
        )
    }
}