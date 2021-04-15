import React, { useState, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectFirstColor,
  selectGradientColor,
  selectSecondColor,
} from "../../store/actions";
import GradientColorPicker from "./GradientColorPicker";

const ColorButton = ({ handleClick, color }) => {
  //console.log(props.btn);
  const [show, setShow] = useState(false);
  // const [colorChange, setColorChange] = useState(null);
  const clickRef = useRef();
  const visibility = show ? "block" : "none";

  const handleClick2 = (e) => {
    setShow(!show);
  };

  const renderColorPicker = () => {
    if (show) {
      return (
        <GradientColorPicker
          // onClick={(e) => e.stop.propagation()}
          color={color}
          handleChange={handleClick}
        ></GradientColorPicker>
      );
    }
  };

  useEffect(() => {
    const onBodyClick = (e) => {
      if (clickRef.current && clickRef.current.contains(e.target)) {
        return;
      }
      setShow(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, [show]);

  // console.log("from ColorBtn");

  return (
    <div className="colorbtn" ref={clickRef}>
      <div className="colorbtn__picker" style={{ display: `${visibility}` }}>
        {renderColorPicker()}
      </div>
      <button className="gradient__btn" onClick={handleClick2}>
        {color}
      </button>
    </div>
  );
};

export default ColorButton;
