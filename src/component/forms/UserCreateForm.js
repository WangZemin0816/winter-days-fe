
import * as React from "react";
import {createAdminUser, createAgentUser, disableUser, fetchAllUser} from "../../requests/UserManageRequest";
import {Button, Card, Col, Input, notification, Row, Select, Table, Tag} from "antd";
import {Option} from "antd/es/mentions";

class UserCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            role: "admin"
        };
    }

    handleRoleChange = (role) => {
        this.setState({
            role: role
        })
    }

    userNameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }


    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    createUser = () => {
        if (this.state.role === 'admin') {
            createAdminUser(this.state.userName,this.state.password).then(edpUser=>{
                notification.info({message: "创建用户成功", description: "创建管理员用户" + edpUser.result.userName + "成功"});
            })
        }else {
            createAgentUser(this.state.userName,this.state.password).then(edpUser=>{
                notification.info({message: "创建用户成功", description: "创建代理商用户" + edpUser.result.userName + "成功"});
            })
        }

    }

    render = () => {
        return (
            <div>
                <Card title="创建新用户：" style={{padding: 20, margin: 20}}>
                    <Row >
                        <Col span={4} offset={1}>
                            <Input placeholder="用户名" value={this.state.userName} onChange={(event) => {
                                this.userNameChange(event)
                            }}/>
                        </Col>
                        <Col span={4}>
                            <Input placeholder="密码" value={this.state.password} onChange={(event) => {
                                this.passwordChange(event)
                            }}/>
                        </Col>
                        <Col span={4} offset={1}>
                            <Select defaultValue="admin" style={{width: 200}} onChange={this.handleRoleChange}>
                                <Select.Option value="admin">身份：管理员</Select.Option>
                                <Select.Option value="agent">身份：代理商</Select.Option>
                            </Select>
                        </Col>
                        <Col span={4} offset={2}>
                            <Button type="primary" onClick={this.createUser}>确认创建用户</Button>
                        </Col>
                    </Row>
                </Card>

            </div>
        );
    }

}

export default UserCreateForm