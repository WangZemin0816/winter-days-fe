// Copyright (c) 2020 Wang Zemin(Personal). All Right Reserved.
import React, {Component} from "react";
import './owl.css';

class Owl extends Component {
    constructor(props) {
        super(props);
        this.state = {coverEyes: false};
    }
    componentDidMount() {
        this.props.onRef(this);    // 调用父组件传入的函数，把自身赋给父组件
    }

    coverEyes(){
        this.setState({coverEyes: true})
    }
    unCoverEyes(){
        this.setState({coverEyes: false})
    }
    render() {
        const {coverEyes} = this.state
        return (
            <div className="owl" id="owl">
                <div className="hand left-hand" style={coverEyes ? styles.focusHandLeft : {}}/>
                <div className="head"/>
                <div className="hand right-hand" style={coverEyes ? styles.focusHandRight : {}}/>
                <div className="arms-box">
                    <div className="arm left-arm" style={coverEyes ? styles.focusArmsLeft : {}}/>
                    <div className="arm right-arm" style={coverEyes ? styles.focusArmsRight : {}}/>
                </div>
            </div>
        );
    }
}

const styles = {
    focusHandLeft: {
        transform: 'translateX(42px) translateY(-15px) scale(0.7)',
    },
    focusHandRight: {
        transform: 'translateX(-42px) translateY(-15px) scale(0.7)',
    },

    focusArmsRight: {
        transform: 'translateY(-40px) translateX(-40px) scaleX(-1)'
    },
    focusArmsLeft: {
        transform: 'translateY(-40px) translateX(40px)'
    }
}
export default Owl;

