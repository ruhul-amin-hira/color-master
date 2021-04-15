import React from "react";
import { useSelector } from "react-redux";
import SingleGradientCopied from "./SingleGradientCopied";

const GradientCopied = () => {
  const getState = useSelector((state) => state.gradientCopied.values);
  console.log(getState);

  if (getState.length == 0) {
    return (
      <div className="copied__notext">
        <p className="colors__copytext">No gradient color copied</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="copied__header">RGB colors</h1>
      {getState &&
        getState.map((color, index) => {
          return (
            <SingleGradientCopied
              values={color}
              key={index}
            ></SingleGradientCopied>
          );
        })}
    </div>
  );
};

export default GradientCopied;
