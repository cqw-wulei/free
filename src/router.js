import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home.js';
import My from './my/my.js';
import Login from './login/login.js';
import Page404 from './404.js';
//import Layout from './layout.js';
import Head from './head.js';

class MyRouter extends Component {
    /*constructor(props) {
        super();
        //console.log(this);
    } */   
    render() {
        return (
            <Router>
            	<div>
            		<Head />
            		<Switch>
				    <Route path='/' exact component={Home} />
				    <Route path='/login' component={Login}/>
				    <Route path='/my' component={My}/>
				    <Route component={Page404}/>
				    </Switch>
            	</div>
		  </Router>
        );
    }
}

export default MyRouter;