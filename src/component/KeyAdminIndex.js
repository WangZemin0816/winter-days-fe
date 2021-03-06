// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import * as React from "react";
import KeyCreateForm from "./forms/KeyCreateForm";
import KeyListTable from "./tables/KeyListTable";
import KeyIncCountForm from "./forms/KeyIncCountForm";

class KeyAdminIndex extends React.Component {
    render = () => {
        return (
            <div>
                <KeyCreateForm role='admin'/>
                <KeyIncCountForm role='admin'/>
                <KeyListTable role='admin'/>
            </div>
        );
    }
}

export default KeyAdminIndex