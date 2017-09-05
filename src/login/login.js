import React, { Component } from 'react';
import Item from './item.js';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <p className="login-title">这是{this.props.name}的登录页</p>
        {
          this.props.submit.map(function(item){
            return <Item key={item.id} txt={item.txt} type={item.type} name={item.name} infor={item.infor}  />
          })
        }
        <div className="login-item">
          <a href="javascript:;" className="login-submit" onClick={this.props.onSubmit}>登录</a>
        </div>
      </div>
    );
  }
}

export default Login;
