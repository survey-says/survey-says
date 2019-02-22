import React, { Component } from 'react';
import MainNavBar from '../../components/Nav/NavBar/MainNavBar/NavBar'
import { SurveyNavBar } from '../../components/Nav/NavBar/SurveyNavBar/SurveyNavBar';

class Layout extends Component {
    render() {
        return (
            <>
                <MainNavBar />
                <SurveyNavBar />
                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;
