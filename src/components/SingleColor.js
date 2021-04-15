import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import tinycolor from "tinycolor2";
import { selectedSolidColor } from "../store/actions";

const SingleColor = ({ oneColor }) => {
  const dispatch = useDispatch();

  const { rgb } = oneColor;
  const rgbColor = rgb.join(",");
  const rgbColorValue = `rgb(${rgbColor})`;

  let color1 = tinycolor(rgbColorValue);
  let colorToHex = color1.toHexString();
  let color2 = tinycolor(colorToHex);
  let colorIsDark = color2.isDark();

  let textColor = colorIsDark ? "white" : "black";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  const showCopied = () => {
    if (copied) {
      return <p className={`${textColor} copytext`}>copied</p>;
    }
  };

  const handleHexCopy = () => {
    navigator.clipboard.writeText(colorToHex);
    dispatch(selectedSolidColor(colorToHex, rgbColor));
    setCopied(true);
  };

  const handleRgbCopy = () => {
    navigator.clipboard.writeText(rgbColorValue);
    dispatch(selectedSolidColor(colorToHex, rgbColor));
    setCopied(true);
  };

  return (
    <div className="singleColor" style={{ backgroundColor: rgbColorValue }}>
      <p className={`${textColor} colortex`} onClick={handleHexCopy}>
        {colorToHex}
      </p>
      <p className={`${textColor} colortex`} onClick={handleRgbCopy}>
        {rgbColorValue}
      </p>
      {showCopied()}
    </div>
  );
};

export default SingleColor;
