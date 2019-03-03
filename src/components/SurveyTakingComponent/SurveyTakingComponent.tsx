import React, { Component } from 'react';
import ssClient from '../../axios/ss.client';
import { Redirect } from 'react-router';

export default class SurveyTakingComponent extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            survey: {},
            surveyLoaded: false,
            responses: [],
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
        const updatedResponses = this.state.responses.concat({ [name]: value });
        this.setState({
            responses: updatedResponses
        });
    };

    // Submits responses to the database
    handleSubmitResponses = (event) => {
        event.preventDefault();
        this.state.responses.forEach(element => {
            for (let key in element) {
                const responseToSubmit = { "answerChosen": element[key] };
                ssClient.addResponse(responseToSubmit);
            }
            this.setState({
                redirectTo: '/'
            })
        });
    }

    render() {
        console.log('this.state.redirectTo', this.state.redirectTo);
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
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your response here" />
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
                            <h2>Loading...</h2>
                        )}
                </div>
            </div >
        )
    }
}