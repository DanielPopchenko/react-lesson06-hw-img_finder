import React from "react";

export default function ImageGalleryItem(id, { ...image }) {
  return (
    <li key={id}>
      <img src={image.largeImageURL} alt="" />
    </li>
  );
}
