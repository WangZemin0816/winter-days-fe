// Copyright (c) 2020 Wang Zemin(Personal). All Right Reserved.
import React, {Component} from "react";
import {Form, Input, Button, Checkbox, notification} from "antd";
import {UserOutlined, LockOutlined, LoginOutlined} from "@ant-design/icons";
import Owl from "./Owl";
import "./login-box.css"
import "antd/dist/antd.css";
import {postRequest} from "../common/Request"
import {ACCESS_TOKEN} from "../common/Constants";

class LoginBox extends Component {

    loginSubmit = (form) => {
        postRequest("/console/fe/auth/login", JSON.stringify(form))
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.result.accessToken);
                notification.success({message: "用户登录成功", description: "页面即将跳转."})
            })
            .catch(error => {
                notification.error({message: error.error, description: error.message});
            });
    }

    render() {
        return (
            <div className="login-container" id="login-container">
                <div className="login-animation">
                    <Owl onRef={(ref) => {
                        this.$owl = ref
                    }}/>
                </div>

                <div className="login-box">
                    <Form name="login-form" initialValues={{remember: true}} onFinish={this.loginSubmit}>
                        <Form.Item name="userName" rules={[{required: true, message: "用户名不能为空!",},]}>
                            <Input placeholder="用户名" addonBefore={<UserOutlined/>} size="large"/>
                        </Form.Item>

                        <Form.Item name="password" rules={[{required: true, message: "密码不能为空!",},]}>
                            <Input.Password placeholder="密码" addonBefore={<LockOutlined/>} size="large"
                                            onFocus={() => this.$owl.coverEyes()}
                                            onBlur={() => this.$owl.unCoverEyes()}/>
                        </Form.Item>

                        <Form.Item className="login-remember" name="remember" valuePropName="checked">
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>
                        <div className="login-bottom">
                            <Form.Item>
                                <Button type="primary" shape="round" icon={<LoginOutlined/>} size="large"
                                        htmlType="submit">登录</Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default LoginBox;
