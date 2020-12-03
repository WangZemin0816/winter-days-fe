import React, {Component} from "react";
import './App.css';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import IndexPage from "./index/IndexPage";
import LoginPage from "./login/LoginPage";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Redirect exact from="/" to="/index"/>
                <Route path="/index" component={IndexPage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
        );
    }
}

export default withRouter(App);
