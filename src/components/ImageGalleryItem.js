import React from "react";
// import "../base.css";
import "../base.css";

export default function ImageGalleryItem({ itemKey, imageUrl, alt }) {
  console.log("imageUrl: ", imageUrl);
  console.log("alt: ", alt);
  return (
    <li>
      <img className="ImageGalleryItem-image" src={imageUrl} alt={alt} />
    </li>
  );
}
