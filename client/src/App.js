import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import AuthServices from "./services/auth.services";

import ProtectedRoute from "./components/routes/ProtectedRoute";

import Signup from "./components/auth/Signup";

import Login from "./components/auth/Login";

import NavBarComponent from "./components/layout/NavBarComponent";

import Home from "./components/home/Home";

import Dashboard from "./components/dashboard/Dashboard";

import Profile from "./components/profile/Profile";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: null };
    this.authServices = new AuthServices();
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user });
    console.log("A component has changed the user in App:", this.state.loggedInUser);
  };

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.authServices
        .loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }));
    }
  };

  render() {
    this.fetchUser();


    //! SI EL USUARIO ESTÁ LOGGEADO, MUESTRA ESTE COMPONENTE SI EN LA URL ESTÁ ESTA RUTA

    if (this.state.loggedInUser) {
      return (
        <>
          <NavBarComponent setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

          <Switch>
            {/* <ProtectedRoute path="/profile" user={this.state.loggedInUser} component={Profile} /> */}
            <Route path="/profile" exact render={match => <Profile {...match} setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />

            <Route path="/" exact render={match => <Home {...match} setUser={this.setTheUser} />} />
            <Route path="/dashboard" exact render={match => <Dashboard {...match} setUser={this.setTheUser} />} />
          </Switch>
        </>
      );
    } else {
      return (
        <>
          <NavBarComponent setUser={this.setTheUser} userInSession={this.state.loggedInUser} />

          <Switch>
            <ProtectedRoute path="/profile" user={this.state.loggedInUser} component={Profile} />
            <Route path="/" exact render={match => <Home {...match} setUser={this.setTheUser} />} />
            <Route path="/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
            <Route path="/signup" exact render={match => <Signup {...match} setUser={this.setTheUser} />} />>
          </Switch>
        </>
      );
    }
  }
}

export default App;
