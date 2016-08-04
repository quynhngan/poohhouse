import React, { Component } from 'react';
import "./GalleryPost.css"

class GalleryPost extends Component {
  render() {
    return (
      <div className="GalleryPost-content">
        <img src="http://demo.evatheme.com/wp/cook-traveler2/wp-content/uploads/2015/11/10-1170x600.jpg" className="GalleryPost-background"/>
        <div className="GalleryPost-info">
          <div className="GalleryPost-timestamp">
            5 August, 2016
          </div>
          <div className="GalleryPost-title">
            Roast chicken with herbs
          </div>
          <div className="GalleryPost-readmore">
           Read more
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryPost;
