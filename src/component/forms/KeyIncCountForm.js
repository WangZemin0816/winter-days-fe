import * as React from "react";

import {Button, Card, Col, Input, InputNumber, notification, Row} from "antd";

import {increaseKey, increaseOwnKey} from "../../requests/KeyManageRequest";

class KeyIncCountForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            incCount: 1000,
            incKeyName:"",
        };
    }

    keyIncCountChange = (event) => {
        this.setState({
            incCount: event
        })
    }

    keyIncKeyNameChange = (event) => {
        this.setState({
            incKeyName: event.target.value
        })
    }

    incKeyCount = () => {
        if (this.props.role === 'admin'){
            increaseKey(this.state.incKeyName,this.state.incCount).then(edpKey => {
                notification.info({message: "为激活码增加竹子数成功", description: "当前激活码可用竹子数" + edpKey.result.remainTimes});
            })
        }else{
            increaseOwnKey(this.state.incKeyName,this.state.incCount).then(edpKey => {
                notification.info({message: "为激活码增加竹子数成功", description: "当前激活码可用竹子数" + edpKey.result.remainTimes});
            })
        }

    }

    render = () => {
        return (
            <div>
                <Card title="编辑激活码竹子数目：" style={{padding: 20, margin: 20}}>
                    <Row>
                        <Col span={6} offset={1}>
                            <Input placeholder="激活码编号(注意删除空格)"  value={this.state.incKeyName} onChange={this.keyIncKeyNameChange}/>
                        </Col>
                        <Col span={8} offset={1}>
                            <span>增加的可用竹子数目（负数为减少）</span>
                            <InputNumber min={-10000000} max={10000000} defaultValue={1000} value={this.state.incCount}
                                         onChange={(event) => {this.keyIncCountChange(event)}}/>
                            <span>次</span>
                        </Col>

                        <Col span={4} offset={2}>
                            <Button type="primary" onClick={this.incKeyCount}>确认修改竹子数</Button>
                        </Col>
                    </Row>
                </Card>

            </div>
        );
    }

}

export default KeyIncCountForm;