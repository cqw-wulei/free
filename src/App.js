import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyRouter from './router.js';

class App extends Component {
    /*constructor(props) {
        super();
        //console.log(this);
    }*/
    qianming() {
        return "陈其文";
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
                <MyRouter qianming={this.qianming()} />
            </div>
        );
    }
}

export default App;
