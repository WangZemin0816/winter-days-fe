// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import * as React from "react";
import KeyCreateForm from "./forms/KeyCreateForm";
import KeyListTable from "./tables/KeyListTable";

class KeyAgentIndex extends React.Component {
    render = () => {
        return (
            <div>
                <KeyCreateForm role='agent'/>
                <KeyListTable role='agent'/>
            </div>
        );
    }
}

export default KeyAgentIndex