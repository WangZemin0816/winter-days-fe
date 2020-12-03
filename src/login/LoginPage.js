import React, {Component} from "react";
import 'antd/dist/antd.css';
import './login-page.css';
import LoginBox from "./LoginBox";

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='login-page' id='login-page'>
                <LoginBox/>
            </div>
        );
    }
}

export default LoginPage;