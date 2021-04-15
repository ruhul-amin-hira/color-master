import React from "react";
import { useSelector } from "react-redux";
import SingleCopied from "./SingleCopied";

const SolidCopied = () => {
  const getCopiedColor = useSelector((state) => state.copyToClickboard.colors);
  //console.log(getCopiedColor);

  const bgImage = (rgb) => {
    return (
      <>
        <span className="copied__codecolor">background-color:</span>rgb({rgb}
        );
      </>
    );
  };

  const bgColor = (solid) => {
    return (
      <>
        <span className="copied__codecolor">color:</span>
        {solid};
      </>
    );
  };

  if (getCopiedColor.length == 0) {
    return (
      <div className="copied__notext">
        <p className="colors__copytext">No solid color copied</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="copied__header">Solid colors</h1>
      {getCopiedColor &&
        getCopiedColor.map((color) => {
          return (
            <SingleCopied
              color={color}
              key={Math.random() * 100}
              bgImage={bgImage}
              bgColor={bgColor}
            ></SingleCopied>
          );
        })}
    </div>
  );
};

export default SolidCopied;
