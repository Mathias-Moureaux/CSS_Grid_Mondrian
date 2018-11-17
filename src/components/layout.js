import React, { Component } from 'react';
import './layout.css'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="picture">
        <div className="container">
          <div className="item item1"></div>
          <div className="item item2"></div>
          <div className="item item3"></div>
          <div className="item item4"></div>
          <div className="item item5"></div>
          <div className="item item6"></div>
          <div className="item item7"></div>
        </div>
      </div>
    );
  }
}

export default Layout;