import React, { Component } from "react";
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage"
import DoorsList from "./components/DoorsList"
import Door from "./components/Door"
import DoorForm from "./components/DoorForm"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



class App extends Component {


    render() {
        return (
            <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                     <Route exact path="/doors" component={LandingPage} />
                    <Route exact path="/doorlist" component={DoorsList} />
                    <Route exact path="/doors/create" component={DoorForm} />
                    <Route exact path="/doors/:doorId" component={Door} /> 
                </Switch>
            </Router>
            </div>
        )
    }

}
export default App;
