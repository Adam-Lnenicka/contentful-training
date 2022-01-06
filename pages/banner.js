import React from "react";

const Banner = ({ callToCstion, text, image }) => {
  return (
    <div>
      <img src={image} />
      <p>{text}</p>
      <a>{callToCstion}</a>
    </div>
  );
};

export default Banner;
