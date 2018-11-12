import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {firebase} from "../firebase";


import * as routes from "../const/routes.js"
import Navigation from "./Navigation.js"
import HomePage from "./Home.js"
import SignUpPage from "./SignUp.js"
import SignInPage from "./SignIn.js"
import AccountPage from "./Account.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged( u => {
      if (u) {
        this.setState({user: u});
      } else {
        this.setState({user: null});
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
            <div>
              <Navigation user={this.state.user} />

              <hr/>
              <Route
                exact path={routes.ACCOUNT}
                render={(props) => <AccountPage user={this.state.user}/>}
              />
              <Route
                exact path={routes.SIGN_UP}
                component={SignUpPage}
              />
              <Route
                exact path={routes.SIGN_IN}
                component={SignInPage}
              />
              <Route
                exact path={routes.HOME}
        component={HomePage}
              />
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
