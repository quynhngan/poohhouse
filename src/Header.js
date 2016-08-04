import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header-header">
        <div className="Header-logo"/>
        <div className="Header-menu">
          <div className="Header-menu-item">
            Posts
          </div>
          <div className="Header-menu-item">
            Tags
          </div>
          <div className="Header-menu-item">
            About
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
