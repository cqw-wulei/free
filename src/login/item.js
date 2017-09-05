import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <div className="login-item">
        <label className="login-item-txt">{this.props.txt}:</label>
        <input type={this.props.type} name={this.props.name} className="login-input" placeholder={this.props.infor} />
      </div>
    );
  }
}

export default Item;
