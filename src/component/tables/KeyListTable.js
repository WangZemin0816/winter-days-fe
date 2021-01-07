// Copyright (c) 2020 Wang Zemin Personal. All Right Reserved

import * as React from "react";
import {disableUser, fetchAllUser} from "../../requests/UserManageRequest";
import {Button, notification, Table, Tag} from "antd";
import {disableKey, disableOwnKey, fetchAllKey, fetchAllOwnKey} from "../../requests/KeyManageRequest";


class KeyListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: [],
            pagination: {current: 1, pageSize: 10}
        };
    }

    componentDidMount = () => {
        this.refreshKeyData()
    }

    clickDisableKey = (e, keyName) => {
        console.log("keyName:" + JSON.stringify(keyName))
        if (this.props.role === 'admin') {
            disableKey(keyName).then((edpKey) => {
                this.refreshKeyData()
                notification.info({message: "禁用激活码成功", description: "禁用激活码" + edpKey.result.keyName + "成功"});
            })
        } else {
            disableOwnKey(keyName).then((edpKey) => {
                this.refreshKeyData()
                notification.info({message: "禁用激活码成功", description: "禁用激活码" + edpKey.result.keyName + "成功"});
            })
        }
    }

    onTableChange = (pagination) => {
        this.setState({pagination: pagination}, this.refreshKeyData);
    }


    refreshKeyData = () => {
        if (this.props.role === 'admin') {
            fetchAllKey(this.state.pagination)
                .then((keyDomains) => {
                    let fetchKeys = keyDomains.result.map((userDomain) => this.toTableElement(userDomain))
                    this.setState({
                        keys: fetchKeys, pagination: {
                            current: keyDomains.pageNo,
                            pageSize: keyDomains.pageSize,
                            total: keyDomains.total
                        }
                    })
                })
        } else {
            fetchAllOwnKey(this.state.pagination)
                .then((keyDomains) => {
                    let fetchKeys = keyDomains.result.map((userDomain) => this.toTableElement(userDomain))
                    this.setState({
                        keys: fetchKeys, pagination: {
                            current: keyDomains.pageNo,
                            pageSize: keyDomains.pageSize,
                            total: keyDomains.total
                        }
                    })
                })
        }

    }


    toTableElement = (keyDomain) => {
        return {
            "keyName": keyDomain.keyName,
            "createTime": keyDomain.createTime,
            "createBy": keyDomain.createBy,
            "deviceInfo": keyDomain.deviceInfo,
            "effectiveTime": keyDomain.effectiveTime,
            "expireTime": keyDomain.expireTime,
            "remainTimes": keyDomain.remainTimes,
            "status": keyDomain.status
        }
    }

    render = () => {
        let pagination = this.state.pagination
        const keyColumns = [
            {
                title: '激活码唯一名称',
                dataIndex: 'keyName',
                key: 'keyName',
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
                title: '绑定的设备',
                dataIndex: 'deviceInfo',
                key: 'deviceInfo',
            },
            {
                title: '第一次使用时间',
                dataIndex: 'effectiveTime',
                key: 'effectiveTime',
            },
            {
                title: '过期时间',
                dataIndex: 'expireTime',
                key: 'expireTime',
            },
            {
                title: '可用次数',
                dataIndex: 'remainTimes',
                key: 'remainTimes',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '禁用激活码',
                dataIndex: 'action',
                key: 'action',
                render: (text, record, index) => (
                    <Button type="dashed" danger disabled={record.status !== "NORMAL"} key={record.keyName}
                            onClick={e => this.clickDisableKey(e, record.keyName)}>禁用激活码</Button>
                ),
            }]
        return (
            <div style={{padding: 10, margin: 10}}>
                <Table
                    columns={keyColumns}
                    dataSource={this.state.keys}
                    rowKey={(record) => record.keyName}
                    onChange={this.onTableChange}
                    pagination={pagination}
                />
            </div>
        );
    }

}

export default KeyListTable