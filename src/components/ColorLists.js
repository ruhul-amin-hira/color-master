import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Values from "values.js";
import SingleColor from "./SingleColor";

const ColorLists = () => {
  const getColor = useSelector((state) => state.currentColor.color);
  const newColors = new Values(getColor).all(10);
  return (
    <>
      {newColors &&
        newColors.map((color, index) => {
          return <SingleColor oneColor={color} key={index}></SingleColor>;
        })}
    </>
  );
};

export default ColorLists;
