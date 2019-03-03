import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import ssClient from '../../axios/ss.client';

class Analytics extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            currentChoice: 'pie',
            surveyData: {},
            surveyLoaded: false,
        }
    }

    // When the component mounts, load the survey data into the state
    componentDidMount = async () => {
        // Get the survey info
        const survey = await ssClient.findSurveyByIdWithResponses(this.props.match.params.id);

        console.log('survey', survey);

        // Set up the survey data object
        let surveyData: any = {};
        surveyData.title = survey.title;
        surveyData.questions = [];
        // Loop through each of the questions
        for (let questionKey in survey.questions) {
            // Set up the object to store the survey data for this question
            surveyData.questions[questionKey] = {
                questionText: survey.questions[questionKey].questionText,
                questionType: survey.questions[questionKey].type,
                questionData: {
                    labels: [],
                    datasets: [{
                        label: 'Number of Responses',
                        data: [],
                        backgroundColor: [],
                        borderColor: [],
                        borderWidth: 1
                    }]
                }
            };

            // If it's a feedback question, just grab the answer choices
            if (survey.questions[questionKey].type === 5) {
                surveyData.questions[questionKey].answerChoices = survey.questions[questionKey].answerChoices;
            } else {
                // Loop through all of the question choices for this question and get the data
                for (let choiceKey in survey.questions[questionKey].answerChoices) {
                    // Save the data for each answer choice
                    surveyData.questions[questionKey].questionData.datasets[0].data.push(survey.questions[questionKey].answerChoices[choiceKey].responseCount);
                    // Save the labels for each answer choice
                    surveyData.questions[questionKey].questionData.labels.push(survey.questions[questionKey].answerChoices[choiceKey].answerText);
                    // Generate a color and save it in the data
                    const color = this.random_rgba();
                    surveyData.questions[questionKey].questionData.datasets[0].backgroundColor.push(color);
                    surveyData.questions[questionKey].questionData.datasets[0].borderColor.push(color);
                };
            };
        };

        this.setState({
            surveyData: surveyData,
            surveyLoaded: true
        })
    }

    random_rgba = () => {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ', 0.6)';
    }

    // Changes to Pie Chart
    handleClickPie = () => {
        this.setState({
            currentChoice: 'pie'
        })
    }

    // Changes to Br Chart
    handleClickBar = () => {
        this.setState({
            currentChoice: 'bar'
        })
    }

    render() {
        const options = {
            annotation: {
                annotations: [{
                    drawTime: 'afterDatasetsDraw',
                    borderColor: 'white',
                    borderDash: [2, 2],
                    borderWidth: 2,
                    mode: 'vertical',
                    type: 'line',
                    value: 10,
                    scaleID: 'x-axis-0',
                }]
            },
            maintainAspectRation: false
        };

        console.log('this.state', this.state);
        return (
            <div className="container">
                <div className="jumbotron">
                    {this.state.surveyLoaded ? (
                        <>
                            <h2 className="mb-3">Analytics: {this.state.surveyData.title}</h2>
                            <button className='btn btn-primary m-2' onClick={this.handleClickPie}>Pie</button>
                            <button className='btn btn-primary m-2' onClick={this.handleClickBar}>Bar</button>
                            {
                                this.state.surveyData.questions.map((question, index) => (
                                    <div key={index} className="card form-group mb-3">
                                        <h5 className="card-header">{question.questionText}</h5>
                                        <div className="card-body">
                                            {question.questionType === 5 ? (
                                                <>
                                                    <div className="card-title">Responses submitted by survey takers:</div>
                                                    <ul className="list-group list-group-flush">
                                                        {question.answerChoices.map(choice => (
                                                            <li key={choice.choiceId} className="list-group-item">{choice.answerText}</li>
                                                        ))}
                                                    </ul>
                                                </>
                                            ) : (
                                                    <>
                                                        {this.state.currentChoice === 'bar' &&
                                                            <Bar
                                                                data={question.questionData}
                                                                width={100}
                                                                height={50}
                                                                options={options}
                                                            />
                                                        }
                                                        {this.state.currentChoice === 'pie' &&
                                                            <Pie
                                                                data={question.questionData}
                                                            />
                                                        }
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    ) : (
                            <h2>Loading...</h2>
                        )}
                </div>
            </div>
        )
    }
}

export default Analytics;
