import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';


export interface IRegisterProps {
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    email: string,
    submitted: boolean,
    errorMessage: string,
    userInfo: string,
    updateEmail(email: string): void,
    updateFirstName(firstName: string): void,
    updateLastName(lastName: string): void,
    updatePassword(password: string): void,
    updateUsername(username: string): void,
    handleSubmit(userInfo: {}): void
}

export class RegisterComponent extends React.Component<IRegisterProps, any> {
    constructor(props) {
        super(props);

        /*   this.state = {
              user: {
                  firstName: '',
                  lastName: '',
                  username: '',
                  password: '',
                  email: ''
              },
              submitted: false
          }; */

        // this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        // this.props.handleChange(name, value, this.props.userInfo);
        console.log("Should update: ", name);
        console.log("Type of name: ", typeof name)
        console.log("With: ", value);
        switch (event.target.name) {
            case "firstName":
                this.props.updateFirstName(event.target.value);
                break;
            case "lastName":
                this.props.updateLastName(value);
                break;
            case "username":
                this.props.updateUsername(value);
                break;
            case "password":
                this.props.updatePassword(value);
                break;
            case "email":
                this.props.updateEmail(value);
                break;
        }
        return value;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            username: this.props.username,
            password: this.props.password,
            email: this.props.email,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
        }
        console.log('The user info being registered is ', userData);
        this.props.handleSubmit(userData);
        /* this.setState({
            ...this.state,
            submitted: true
        });
        const { user } = this.state;
        // If the form was submitted return user object from DB (userID included)
        console.log("Users at submit are: ", this.state.user); */

    }

    render() {
        return (
            <div className="container register-container">
                <div className="jumbotron">
                    <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                    <form name="form" onSubmit={this.handleSubmit} className="form-register">
                        <div className={'form-group'}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="firstName" className="form-control" name="firstName" onChange={this.handleChange} required />
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