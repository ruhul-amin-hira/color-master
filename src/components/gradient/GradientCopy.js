import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gradientCopiedColor } from "../../store/actions";

const GradientCopy = ({ css, rgb1, rgb2, direction }) => {
  const [copied, setCopied] = useState(false);
  // const cssText = `background-image: linear-gradient(to right top, ${color1.hex}, ${color2.hex})`;
  // console.log(css);

  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  const showCopied = () => {
    if (copied) {
      return (
        <span className="copytext2">
          <br />
          copied
        </span>
      );
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`background-image: ${css}`);
    // let extractRgb = Object.values(rgb1);
    dispatch(gradientCopiedColor(css, rgb1, rgb2, direction));
    // dispatch(selectedSolidColor(colorToHex, rgbColor));
    setCopied(true);
  };

  return (
    <div className="gradient__copy">
      <h1 className="gradient__cssheader">CSS Code</h1>
      <p className="gradient__csstext" onClick={handleCopy}>
        background-image: {css}
        {showCopied()}
      </p>
    </div>
  );
};

export default GradientCopy;
