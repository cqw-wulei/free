import React, { Component } from 'react';

class My extends Component {
    static defaultProps = {//不能修改的数据，只用于初始化
        myname: 'free'
    }; 
    /*constructor(props) {//构造函数
        super(props);
        //
    }*/    
    render() {
        return (
            <div className="my">
                <p className="login-title">这是的{this.props.myname}个人中心页</p>
            </div>
        );
    }
}

export default My;
