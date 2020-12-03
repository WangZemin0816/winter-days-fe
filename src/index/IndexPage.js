// Copyright (c) 2020 Wang Zemin(Personal). All Right Reserved.
import React, {Component} from "react";
import {Layout, Menu} from 'antd';
import SiderNav from "./SiderNav";
import ContentMain from "./ContentMain";
const {Header, Sider, Content} = Layout;

class IndexPage extends React.Component {
    state = {

        collapsed: false,
    };

    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider collapsible collapsed={this.state.collapsed}  onCollapse={this.onCollapse}>
                    <SiderNav/>
                </Sider>

                <Layout className="site-layout">
                    <Header className="header">
                        <div className="logo" />
                    </Header>
                    <Content>
                        <ContentMain/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default IndexPage
