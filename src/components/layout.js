import React, { Component } from 'react';
import './layout.scss'

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
          <div className="item flip-item2">
            <div className="item flip-item2-inner">
              <div className="item flip-item2-front">
              </div>
              <div className="item flip-item2-back">
              </div>
            </div>
          </div>
          <div className="item item3"></div>
          <div className="item item4"></div>
          <div className="item item5"></div>
          <div className="item item6"></div>
          <div className="item item7">
            <p className="title">Composition II en rouge, bleu et jaune<br/><span className="artist">Mondrian (1929)</span></p>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;