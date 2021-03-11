import * as React from "react";
import {createAdminUser, disableUser, fetchAllUser} from "../../requests/UserManageRequest";
import {Button, Card, Col, Input, InputNumber, notification, Row, Select, Table, Tag} from "antd";
import {Option} from "antd/es/mentions";
import {createKey} from "../../requests/KeyManageRequest";

class KeyCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyEffectiveDay: 10,
            keyTotalTimes:100,
        };
    }

    keyEffectiveDayChange = (day) => {
        this.setState({
            keyEffectiveDay: day
        })
    }

    keyTotalTimesChange = (times) => {

        this.setState({
            keyTotalTimes: times
        })
    }

    createKey = () => {
        createKey(this.state.keyEffectiveDay,this.state.keyTotalTimes).then(edpKey => {
            notification.info({message: "创建激活码成功", description: "创建激活码" + edpKey.result.keyName + "成功"});
        })
    }

    render = () => {
        return (
            <div>
                <Card title="创建新激活码：" style={{padding: 20, margin: 20}}>
                    <Row>
                        <Col span={4} offset={1}>
                            <span>有效期</span>
                            <InputNumber min={1} max={1000000} defaultValue={10} value={this.state.keyEffectiveDay}
                                         onChange={(event) => {this.keyEffectiveDayChange(event)}}/>
                            <span>天</span>
                        </Col>
                        <Col span={4} offset={1}>
                            <span>可用预测次数</span>
                            <InputNumber min={1} max={1000000} defaultValue={100} value={this.state.keyTotalTimes}
                                         onChange={(event) => {this.keyTotalTimesChange(event)}}/>
                            <span>次</span>
                        </Col>
                        <Col span={4} offset={2}>
                            <Button type="primary" onClick={this.createKey}>确认创建激活码</Button>
                        </Col>
                    </Row>
                </Card>

            </div>
        );
    }

}

export default KeyCreateForm