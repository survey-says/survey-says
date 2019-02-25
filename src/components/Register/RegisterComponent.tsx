import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export interface IRegisterProps {
    userInfo: {},
    submitted: boolean
    handleChange(fieldName: string, value: String),
    handleSubmit(userInfo: {})
}

export class RegisterComponent extends React.Component<IRegisterProps, any> {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: ''
            },
            submitted: false
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.props.handleChange(name, value);

        console.log("The state after handling: ", this.state);
        return value;
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            ...this.state,
            submitted: true
        });
        const { user } = this.state;
        // If the form was submitted return user object from DB (userID included)
        console.log("Users at submit are: ", this.state.user);

    }

    render() {
        return (
            <div className="container register-container">
                <div className="jumbotron">
                    <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                    <form name="form" onSubmit={this.handleSubmit} className="form-register">
                        <div className={'form-group'}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="firstName" className="form-control" name="firstName" value={this.state.user.firstName} onChange={this.handleChange} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="lastName" className="form-control" name="lastName" onChange={this.handleChange} required />


                        </div>
                        <div className='form-group'>
                            <label htmlFor="username">Username</label>
                            <input type="Username" className="form-control" name="username" onChange={this.handleChange} required />



                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" onChange={this.handleChange} required />



                        </div>
                        <div className={'form-group'}>
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.handleChange} required />



                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Register</button>

                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </div>

                    </form>
                </div>
            </div>
        );
    }

}


export default RegisterComponent;