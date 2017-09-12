import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MyRouter from './router.js';
import { Button } from 'react-weui';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

class App extends Component {
    /*constructor(props) {
        super();
        //console.log(this);
    }*/   
    render() {
        return (
            <div className="App">
                <Button>this Button</Button>
                {/*<div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>My name is {this.qianming()}</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>*/}                
                <MyRouter />
            </div>
        );
    }
}

export default App;
