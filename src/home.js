import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    /*constructor(props) {
        super(props);
    }*/
    render() {
        return (
        	<div>
            	<p><Link to="/login">登录</Link></p>
				<p><Link to="/my">我的个人中心</Link></p>
			</div>
        );
    }
}

export default Home;


