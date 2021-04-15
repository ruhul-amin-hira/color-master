import React from "react";

const SingleCopied = ({ color, bgImage, bgColor }) => {
  // console.log(color);
  const { solid, rgb } = color;
  return (
    <div>
      <div className="copied__colorcon">
        <div
          className="copied__colorbox"
          style={{ backgroundColor: `${solid}` }}
        >
          &nbsp;
        </div>
        <div className="copied__colorindex">
          <p className="copied__codecolorText">{bgColor(solid)}</p>
          <p className="copied__codecolorText">{bgImage(rgb)}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCopied;
