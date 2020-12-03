// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import React from "react";
import "./content-main.css"
import KeyAdminIndex from "../component/KeyAdminIndex";
import KeyAgentIndex from "../component/KeyAgentIndex";
import UserAdminIndex from "../component/UserAdminIndex";


class ContentMain extends React.Component {
    render() {
        return (
            <div className='content-main'>
                <Switch>
                    <Redirect exact from="/index" to='/index/key/agent'/>
                    <Route exact path='/index/key/agent' component={KeyAgentIndex}/>
                    <Route exact path='/index/key/admin' component={KeyAdminIndex}/>
                    <Route exact path='/index/user/admin' component={UserAdminIndex}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(ContentMain);

