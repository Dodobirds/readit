import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {auth} from '../firebase';
import * as routes from '../const/routes';

const FORM_SCHEMA = {
  username: "",
  email: "",
  password: "",
  password_verify: "",
  error_msg: null,
}

const SignUpPage = ({history}) =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...FORM_SCHEMA};
  }
  onSubmit = (event) => {
    auth.signUp_Email(this.state.email, this.state.password)
      .then(authUser => {
        this.setState({FORM_SCHEMA});
        this.props.history.push(routes.HOME);
      })
      .catch(error => {
        this.setState({error_msg: error});
      });
    event.preventDefault();
  }

  render() {
     let isValid = (email, name, pw, pw_v) => {
       return  pw !== pw_v || pw === "" || email === "" || name === "";
     }

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.username}
          onChange={event => this.setState({username: event.target.value})}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={this.state.email}
          onChange={event => this.setState({email: event.target.value})}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={this.state.password}
          onChange={event => this.setState({password: event.target.value})}
          type="password"
          placeholder="Password"
        />
        <input
          value={this.state.password_verify}
          onChange={event => this.setState({password_verify: event.target.value})}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isValid(this.state.email, this.state.username, this.state.password, this.state.password_verify)} type="submit">
          Sign Up
        </button>

        { this.state.error_msg && <p>{this.state.error_msg.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {SignUpLink}
