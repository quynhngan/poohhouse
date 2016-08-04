import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import GalleryPost from './GalleryPost.js';
import PoohPost from './PoohPost.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-content">
          <GalleryPost/>
          <div className="App-posts">
            <PoohPost/>
            <PoohPost reverseClass="PoohPost-reverse"/>
            <PoohPost/>
            <PoohPost reverseClass="PoohPost-reverse"/>
            <PoohPost/>
            <PoohPost reverseClass="PoohPost-reverse"/>
            <PoohPost/>
            <PoohPost reverseClass="PoohPost-reverse"/>
            <PoohPost/>
            <PoohPost reverseClass="PoohPost-reverse"/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
