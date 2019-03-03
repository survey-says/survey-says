import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import ssClient from '../../axios/ss.client';
import Loader from '../Loader/Loader';

class Analytics extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            currentChoice: 'pie',
            survey: {},
            surveyData: {},
            surveyLoaded: false,
        }
    }

    // When the component mounts, load the survey data into the state
    componentDidMount = async () => {
        // Get the survey info
        const survey = await ssClient.findSurveyByIdWithResponses(this.props.match.params.id);

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

            // Loop through all of the question choices for this question
            for (let choiceKey in survey.questions[questionKey].answerChoices) {
                // Save the data for each answer choice
                surveyData.questions[questionKey].questionData.datasets[0].data.push(survey.questions[questionKey].answerChoices[choiceKey].responseCount);
                // Save the labels for each answer choice
                surveyData.questions[questionKey].questionData.labels.push(survey.questions[questionKey].answerChoices[choiceKey].answerText);
                // Generate a color and save it in the data
                const color = this.generateColors(survey.questions[questionKey].answerChoices.length, choiceKey);
                surveyData.questions[questionKey].questionData.datasets[0].backgroundColor.push(color);
                surveyData.questions[questionKey].questionData.datasets[0].borderColor.push(color);
            };
        };

        this.setState({
            surveyData: surveyData,
            surveyLoaded: true
        })
    }

    generateColors = (numOfSteps, step) => {
        var r, g, b;
        var h = step / numOfSteps;
        var i = ~~(h * 6);
        var f = h * 6 - i;
        var q = 1 - f;
        switch (i % 6) {
            case 0: r = 1; g = f; b = 0; break;
            case 1: r = q; g = 1; b = 0; break;
            case 2: r = 0; g = 1; b = f; break;
            case 3: r = 0; g = q; b = 1; break;
            case 4: r = f; g = 0; b = 1; break;
            case 5: r = 1; g = 0; b = q; break;
        }
        var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
        return (c);
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
                                                <div>Feedback Question. No Data to Display.</div>
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
                            <Loader />
                        )}
                </div>
            </div>
        )
    }
}

export default Analytics;
