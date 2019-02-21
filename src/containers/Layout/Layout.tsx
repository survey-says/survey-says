import React, { Component } from 'react';
import NavBar from '../../components/Nav/NavBar/NavBar'

class Layout extends Component {
    render() {
        return (
            <>
                <NavBar />
                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;
