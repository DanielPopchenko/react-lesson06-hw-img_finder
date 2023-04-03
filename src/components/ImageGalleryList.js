import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGalleryList extends Component {
  state = { isOpenModal: true };

  render() {
    const { images } = this.props;
    return (
      <div>
        <ul className="ImageGallery">
          {images.map((image) => {
            // console.log(image);
            return (
              <ImageGalleryItem
                key={image.id}
                imageUrl={image.webformatURL}
                alt={image.tags}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
