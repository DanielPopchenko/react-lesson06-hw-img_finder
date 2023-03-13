import React, { Component } from "react";

export default class ImageGallery extends Component {
  state = {};

  fetchImages = (e) => {
    e.preventDefault();

    fetch(
      "https://pixabay.com/api/?q=cat&page=1&key=34365152-dabc67f475d013033087d2982&image_type=photo&orientation=horizontal&per_page=12"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.hits);
      });
  };
  render() {
    return (
      <div>
        <ul class="gallery"></ul>
      </div>
    );
  }
}
