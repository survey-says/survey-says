import React, { Component } from 'react';
import ssClient from '../../axios/ss.client';
import { Redirect } from 'react-router';
import Loader from '../Loader/Loader';

export default class SurveyTakingComponent extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            survey: {},
            surveyLoaded: false,
            responses: [],
            newFeedback: [],
            redirectTo: null
        }
    }

    componentDidMount = async () => {
        const survey = await ssClient.findSurveyById(this.props.match.params.id);
        this.setState({
            survey: survey,
            surveyLoaded: true
        })
    }

    // Updates state when the user selects an option
    handleResponseInput = event => {
        const { name, value } = event.target;
        // const updatedResponses = this.state.responses.concat({ [name]: value });
        this.setState(prevState => ({
            responses: {
                ...prevState.responses,
                [name]: value

            }
        }));
    };

    // Updates state when the user enters feedback
    handleFeedbackInput = event => {
        const { name, value } = event.target;
        // const updatedResponses = this.state.responses.concat({ [name]: value });
        this.setState(prevState => ({
            newFeedback: {
                ...prevState.newFeedback,
                [name]: value

            }
        }));
    };

    // Submits responses to the database
    handleSubmitResponses = (event) => {
        event.preventDefault();
        for (let key in this.state.responses) {
            const responseToSubmit = {
                "answerChosen": this.state.responses[key]
            };
            ssClient.addResponse(responseToSubmit);
        }
        for (let key in this.state.newFeedback) {
            const newAnswerChoice = {
                "answerText": this.state.newFeedback[key],
                "question": key
            }
            ssClient.addAnswerChoice(newAnswerChoice);
        }
        this.setState({
            redirectTo: '/'
        })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect push to={this.state.redirectTo} />
        }
        return (
            <div className="container">
                <div className="jumbotron">
                    {this.state.surveyLoaded ? (
                        <>
                            <h2 className="mb-3">{this.state.survey.title}</h2>
                            {this.state.surveyLoaded &&
                                <form>
                                    {
                                        this.state.survey.questions.map(question => (
                                            <div key={question.questionId} className="card form-group mb-3">
                                                <h5 className="card-header">{question.questionText}</h5>
                                                <div className="card-body">
                                                    {question.type === 5 ? (
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name={question.questionId}
                                                                value={this.state.newFeedback[question.questionId]}
                                                                onChange={this.handleFeedbackInput}
                                                                placeholder="Enter your response here"
                                                            />
                                                        </div>
                                                    ) : (
                                                            <>
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
                                                            </>
                                                        )}
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmitResponses}>Submit</button>
                                </form>
                            }
                        </>
                    ) : (
                            <Loader />
                        )}
                </div>
            </div >
        )
    }
}