// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import React from "react";
import {NavLink, withRouter} from 'react-router-dom'
import {Layout, Menu, Breadcrumb} from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Icon from "@ant-design/icons/";
import "./sider-nav.css"

const {SubMenu} = Menu;

class SiderNav extends React.Component {
    render() {
        return (
            <div className="sider-nav" id="sider-nav">
                <div className="logo" >
                    <div className="logo-text"/>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="user-manage" icon={<FileOutlined/>}>
                        <NavLink to="/index/user/admin"><span>用户管理模块</span></NavLink>
                    </Menu.Item>
                    <SubMenu key="key-manage" icon={<FileOutlined/>} title="激活码管理">
                        <Menu.Item key="key-manage-own" icon={<PieChartOutlined/>}>
                            <NavLink to="/index/key/agent"><span>管理自己的激活码</span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="key-manage-all" icon={<PieChartOutlined/>}>
                            <NavLink to="/index/key/admin"><span>管理所有的激活码</span></NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default withRouter(SiderNav);