// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import * as React from "react";
import {disableUser, fetchAllUser} from "../../requests/UserManageRequest";
import {Button, Col, Input, notification, Row, Select, Table, Tag} from "antd";
import {Option} from "antd/es/mentions";

class UserCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ""
        };
    }

    render = () => {
        return (
            <div>
                <Row>
                    <Col><Input placeholder="用户名">{this.state.userName}</Input></Col>
                    <Col>
                        <Select defaultValue="admin" style={{width: 120}} onChange={handleChange}>
                            <Option value="admin">管理员</Option>
                            <Option value="agent">代理商</Option>
                        </Select>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default UserCreateForm