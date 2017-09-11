import React, { Component } from 'react';

class Item extends Component {
    /*constructor(props) {
        super(props);
    }*/
    render() {
        return (
            <div className="login-item">
                <label className="login-item-txt">{this.props.txt}:</label>
                <input onChange={this.props.updateState} type={this.props.type} name={this.props.name} className="login-input" value={this.props.val} placeholder={this.props.infor} />
                <div className={this.props.val === '' ? "hide" : "show"}>{this.props.msg}</div>
            </div>
        );
    }
}

export default Item;
