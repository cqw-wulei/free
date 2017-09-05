import React, { Component } from 'react';
import Item from './item.js';
import './login.css';

class Login extends Component {
    static defaultProps = {
        name: '',
        password: '',
    };
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.mySubmit = this.mySubmit.bind(this);
        this.state = {
            name: '',
            password: '',
        };
    }
    initSubmit() {
        let input = [
            {
                id: 1,
                txt: '账号',
                type: 'text',
                name: 'name',
                infor: '请输入您的账号',
                msg: '您已输入账号',
            },
            {
                id: 2,
                txt: '密码',
                type: 'password',
                name: 'password',
                infor: '请输入您的密码',
                msg: '您已输入密码',
            },
        ];
        return input;
    }
    handleChange(event) {
        let state = {};
        state[event.target.name] = event.target.value
        this.setState(state);
    }
    mySubmit() {
        console.log('submit',this.state);
        return false;
    }
    render() {
        let handleChange = this.handleChange;
        let state = this.state;
        return (
            <div className="login">
                <p className="login-title">这是{this.props.name}的登录页</p>
                {                    
                    this.initSubmit().map(function(item){
                        return <Item key={item.id} updateState={handleChange} txt={item.txt} type={item.type} name={item.name} infor={item.infor} msg={item.msg} val={state[item.name]} />;
                    })
                }
                <div className="login-item">
                    <a href="javascript:;" className="login-submit" onClick={this.mySubmit}>登录</a>
                </div>
            </div>
        );
    }
}

export default Login;
