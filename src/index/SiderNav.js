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
                    <Menu.Item key="file-manage" icon={<FileOutlined/>}>
                        <NavLink to="/index/summary"><span>文件管理-不可用</span></NavLink>
                    </Menu.Item>
                    <SubMenu key="audit-tools" icon={<FileOutlined/>} title="审计工具">
                        <Menu.Item key="evaluate-summery" icon={<PieChartOutlined/>}>
                            <NavLink to="/index/summary"><span>求和为某个数的值</span></NavLink>
                        </Menu.Item>
                        <Menu.Item key="extract-key-value" icon={<PieChartOutlined/>}>
                            <NavLink to="/index/extract"><span>提取关键字后边的值</span></NavLink>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default withRouter(SiderNav);