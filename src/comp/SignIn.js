import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import { SignUpLink } from './SignUp';
import {auth} from '../firebase';
import * as routes from '../const/routes';

const SignInPage = ({history}) =>
  <div>
    <h1>Sign In</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const FORM_SCHEMA = {
  email: '',
  password: '',
  error_msg: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...FORM_SCHEMA };
  }

  onSubmit = (event) => {

    auth.signIn_Email(this.state.email, this.state.password)
      .then(() => {
        this.setState({FORM_SCHEMA});
        this.props.history.push(routes.ACCOUNT);
      })
      .catch(error => {
        this.setState({error_msg: error});
      });
    event.preventDefault();
  }

  onGithub = (event) => {
    auth.signIn_Github()
      .then(() => {
        this.setState({FORM_SCHEMA});
        this.props.history.push(routes.ACCOUNT)
      })
    event.preventDefault();
  }

  onGoogle = (event) => {
    auth.signIn_Google()
      .then(() => {
        this.setState({FORM_SCHEMA});
        this.props.history.push(routes.ACCOUNT)
      })
    event.preventDefault();
  }

  render() {
    const isInvalid = this.state.password === '' || this.state.email === '';
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

          { this.state.error_msg && <p>{this.state.error_msg.message}</p> }
      </form>

        <button onClick={this.onGithub}> Github </button>
        <button onClick={this.onGoogle}> Google </button>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {SignInForm};
