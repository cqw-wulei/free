import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import feact from 'node-fetch';
import Item from './item.js';
import './login.css';

class Login extends Component {
    static defaultProps = {/*不能修改的数据，只用于初始化*/
        input: [
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
            {
                id: 3,
                txt: '暗号',
                type: 'number',
                name: 'sign',
                infor: '请输入您的暗号',
                msg: '您已输入暗号',
            },
        ]
    }; 
    constructor(props) {/*构造函数*/
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.mySubmit = this.mySubmit.bind(this);
        this.state = {/*状态机*/
            name: '',
            password: '',
            sign: '',
        };
    }
    handleChange(event) {/*监听用户输入*/
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }
    mySubmit(event) {/*监听用户提交*/
        event.preventDefault();
        console.log('submit',this.state);
        //引入fecth.js，用来前后端数据交互
		fetch('http://httpbin.org/post', { method: 'POST', body: JSON.stringify(this.state) })
		    .then(function(res) {
		        return res.json();
		    }).then(function(json) {
		        console.log(json);
		    });
		        return false;
		    }
    render() {
        let handleChange = this.handleChange;
        let state = this.state;
        return (
            <div className="login">
                <p className="login-title">这是登录页</p>
                {                    
                    this.props.input.map(function(item){
                        return <Item key={item.id} updateState={handleChange} txt={item.txt} type={item.type} name={item.name} infor={item.infor} msg={item.msg} val={state[item.name]} />;
                    })
                }
                <div className="login-item">
                    <Link to="/" className="login-submit" onClick={this.mySubmit}>登录</Link>
                    <Link to="/" className="to-home">返回首页</Link>
                </div>
            </div>
        );
    }
}

export default Login;
