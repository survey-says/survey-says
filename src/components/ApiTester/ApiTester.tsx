import React, { Component } from 'react';
import ssClient from '../../axios/ss.client';

// This component is used to test the API calls in SSClient

class ApiTester extends Component<any, any> {
    constructor(props) {
        super(props);
    }

    handleLoginAsHank = async () => {
        const results = await ssClient.login({ username: "hank", password: "pass44" });
        console.log("Login response:", results)
    }
    handleFindAllUsers = async () => {
        const results = await ssClient.findAllUsers();
        console.log("All Users:", results)
    }
    handleFindUser4 = async () => {
        const results = await ssClient.findUserById(4);
        console.log("User 4:", results)
    }
    handleAddTestUser = async () => {
        const newUsername = "TestUsername" + (Math.floor(Math.random() * 100000) + 1)
        const newUser = {
            "username": newUsername,
            "password": "Test Password",
            "firstName": "Test First Name",
            "lastName": "Test Last Name",
            "email": "test@gmail.com",
        }
        const results = await ssClient.addUser(newUser);
        console.log("User Added Response:", results)
    }
    handleFindAllSurveys = async () => {
        const results = await ssClient.findAllSurveys();
        console.log("All Surveys:", results)
    }
    handleFindPublicSurveys = async () => {
        const results = await ssClient.findSurveysByPrivacy(1);
        console.log("Public Surveys:", results)
    }
    handleFindPrivateSurveys = async () => {
        const results = await ssClient.findSurveysByPrivacy(2);
        console.log("Private Surveys:", results)
    }
    handleFindByModerator2 = async () => {
        const results = await ssClient.findSurveysByModerator(2);
        console.log("Surveys where user 2 is a Moderator:", results)
    }
    handleFindSurvey2 = async () => {
        const results = await ssClient.findSurveyById(2);
        console.log("Survey 2:", results)
    }
    handleAddTestSurvey = async () => {
        const newSurvey = {
            "closingDate": "2019-03-18",
            "creator": 2,
            "dateCreated": "2019-02-28",
            "description": "Test Survey Description",
            "privacy": 2,
            "title": "Test Survey Title"
        }
        const results = await ssClient.addSurvey(newSurvey);
        console.log("Survey Added Response:", results)
    }
    handleAddTestQuestion = async () => {
        const newQuestion = {
            "questionText": "Test Question",
            "questionType": 2,
            "surveyId": 2
        }
        const results = await ssClient.addQuestion(newQuestion);
        console.log("Question Added Response:", results)
    }
    handleAddTestAnswerChoice = async () => {
        const newAnswerChoice = {
            "answerText": "Test Answer Test",
            "questionId": 2
        }
        const results = await ssClient.addAnswerChoice(newAnswerChoice);
        console.log("AnswerChoice Added Response:", results);
    }
    handleAddTestResponse = async () => {
        const newResponse = {
            "answerChosen": 3,
            "question": 2
        }
        const results = await ssClient.addResponse(newResponse);
        console.log("Response Added Response:", results);
    }
    handleTestApi = async () => {
        const results = await ssClient.findUserById(4);
        console.log("API test results:", results)
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>API Tester</h1>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleLoginAsHank}>Login as Hank</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleFindAllUsers}>Find All Users</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleFindUser4}>Find User 4</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleAddTestUser}>Add A Test User</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleFindAllSurveys}>Find All Surveys</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleFindPublicSurveys}>Find Public Surveys</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleFindPrivateSurveys}>Find Private Surveys</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleFindByModerator2}>Find Surveys Where User 2 is Collab</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleFindSurvey2}>Find Survey 2</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleAddTestSurvey}>Add A Test Survey</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleAddTestQuestion}>Add A Test Question</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleAddTestAnswerChoice}>Add A Test Answer Choice</button>
                    <button type="submit" className='btn btn-primary m-2' onClick={this.handleAddTestResponse}>Add A Test Response</button>
                    <button type="submit" className='btn btn-lg btn-success btn-block m-2' onClick={this.handleTestApi}>Test API Call</button>
                </div>
            </div>
        )
    }
}

export default ApiTester;
