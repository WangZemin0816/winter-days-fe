// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import * as React from "react";
import KeyCreateForm from "./forms/KeyCreateForm";
import KeyListTable from "./tables/KeyListTable";
import KeyIncCountForm from "./forms/KeyIncCountForm";

class KeyAgentIndex extends React.Component {
    render = () => {
        return (
            <div>
                <KeyCreateForm role='agent'/>
                <KeyIncCountForm role='agent'/>
                <KeyListTable role='agent'/>
            </div>
        );
    }
}

export default KeyAgentIndex