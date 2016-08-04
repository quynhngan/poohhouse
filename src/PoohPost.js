import React, { Component } from 'react';
import "./PoohPost.css"

class PoohPost extends Component {
  render() {
    return (
      <div className={`PoohPost-content ${this.props.reverseClass}`}>
        <div className="PoohPost-item-left">
          <img src="http://demo.evatheme.com/wp/cook-traveler2/wp-content/uploads/2015/11/17-570x385.jpg" className="PoohPost-image"/>
        </div>
        <div className="PoohPost-item-right">
          <div className="PoohPost-item-author">
            by Tram Nguyen
          </div>
          <div className="PoohPost-item-title">
            Liverpool has a Burried
          </div>
          <div className="PoohPost-item-description">
            When the first ever blanquette was made,
            the person cooking it knew it would be paired with a simple
            but satisfying red. Consciously or unconsciously he or
            she had that in mind when they cooked it.
            Yellow wine from the Jura region has a special relationship
            with Comté cheese which is also from...
          </div>
          <div className="GalleryPost-readmore PoohPost-readmore">
           Read more
          </div>
          <div className="PoohPost-timestamp">
            <div className="PoohPost-timestamp-content">
              5 August, 2016
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default PoohPost;
