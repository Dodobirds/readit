import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import {firebase, database} from "../firebase";

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
      user: null,
      postList: []
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

    database.postRef.orderByChild('votes').on('child_added', (snapshot) => {
      this.setState({
        postList: [snapshot.val()].concat(this.state.postList)
      });
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
                render={(props) => <HomePage user={this.state.user} list={this.state.postList}/>}
              />
            </div>
      </BrowserRouter>
    );
  }
}

export default App;
