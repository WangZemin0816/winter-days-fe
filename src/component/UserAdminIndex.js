// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import * as React from "react";
import UserCreateForm from "./forms/UserCreateForm";
import UserListTable from "./tables/UserListTable";


class UserAdminIndex extends React.Component {
    render = () => {
        return (
            <div>
                <UserCreateForm/>
                <UserListTable/>
            </div>
        );
    }
}

export default UserAdminIndex