// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import * as React from "react";
import {disableUser, fetchAllUser} from "../../requests/UserManageRequest";
import {Button, notification, Table, Tag} from "antd";

class UserListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            pagination: {current: 1, pageSize: 10}
        };
    }

    componentDidMount = () => {
        this.refreshUserData()
    }

    clickDisableUser = (e, userName) => {
        console.log("userName:" + JSON.stringify(userName))
        disableUser(userName).then((edpUser) => {
            this.refreshUserData()
            notification.info({message: "禁用用户成功", description: "禁用用户" + edpUser.result.userName + "成功"});
        })
        console.log('params', userName);
    }


    onTableChange = (pagination) => {
        this.setState({pagination: pagination}, this.refreshUserData);
    }


    refreshUserData = () => {
        fetchAllUser(this.state.pagination)
            .then((userDomains) => {
                let fetchUsers = userDomains.result.map((userDomain) => this.toTableElement(userDomain))
                this.setState({
                    users: fetchUsers, pagination: {
                        current: userDomains.pageNo,
                        pageSize: userDomains.pageSize,
                        total: userDomains.total
                    }
                })

            })
    }


    toTableElement = (userDomain) => {
        let roles = userDomain.roles.map(role => role.displayName)
        let permissions = userDomain.permissions.map(permission => permission.displayName)
        return {
            "userName": userDomain.userName,
            "createTime": userDomain.createTime,
            "createBy": userDomain.createBy,
            "status": userDomain.status,
            "roles": roles,
            "permissions": permissions
        }
    }

    render = () => {
        let pagination = this.state.pagination
        const userColumns = [
            {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
            },
            {
                title: '创建人',
                dataIndex: 'createBy',
                key: 'createBy',
            },
            {
                title: '用户角色',
                dataIndex: 'roles',
                key: 'roles',
                render: tags => (
                    <div>
                        {tags.map(tag => {
                            return (
                                <Tag color='geekblue' key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </div>
                ),
            },
            {
                title: '用户状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '禁用用户',
                dataIndex: 'action',
                key: 'action',
                render: (text, record, index) => (
                    <Button type="dashed" danger disabled={record.status !== "NORMAL"} key={record.userName}
                            onClick={e => this.clickDisableUser(e, record.userName)}>禁用用户</Button>
                ),
            }
        ]
        return (
            <div style={{padding: 10, margin: 10}}>
                <Table
                    columns={userColumns}
                    dataSource={this.state.users}
                    rowKey={(record) => record.userName}
                    onChange={this.onTableChange}
                    pagination={pagination}
                />
            </div>
        );
    }

}

export default UserListTable