import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login.js';

class App extends Component {
  qianming() {
    //let name = "陈其文";
    return "陈其文";
  }
  getLoginData() {
    let submit = [
      {
        id: 1,
        txt: '账号',
        type: 'text',
        name: 'name',
        infor: '请输入您的账号',
      },
      {
        id: 2,
        txt: '密码',
        type: 'password',
        name: 'password',
        infor: '请输入您的密码',
      },
    ];
    return submit;
  }
  onSubmit() {
    console.log('submit');
    alert('你想干啥???');
    return false;
  }
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My name is {this.qianming()}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <Login name="cqw" submit={this.getLoginData()} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
