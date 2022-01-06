import React from "react";

const Banner = ({ callToAction, text, image }) => {
  return (
    <div>
      <img src={image.url} />
      <p>{text}</p>
      <a>{callToAction}</a>
    </div>
  );
};

export default Banner;
