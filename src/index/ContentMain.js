// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import React from "react";
import "./content-main.css"
import SummaryCalculator from "../summary/SummaryCalculator";

class ContentMain extends React.Component {
    render() {
        return (
            <div className='content-main'>
                <Switch>
                    <Redirect exact from="/index" to='/index/summary'/>
                    <Route exact path='/index/summary' component={SummaryCalculator}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(ContentMain);

