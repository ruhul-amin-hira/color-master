import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectFirstColor, selectSecondColor } from "../../store/actions";

import ColorButton from "./ColorButton";
import GradientCopy from "./GradientCopy";
import { useState } from "react";
import { useRef } from "react";

const Gradient = () => {
  const color1 = useSelector((state) => state.gradientSelect.color1);
  const color2 = useSelector((state) => state.gradientSelect.color2);
  //const colors = { ...color1, ...color2 };
  // console.log(color1, color2);

  // console.log("Gradient", color1, color2);

  const iconRef = useRef("icons");

  const dispatch = useDispatch();

  const handleColor1 = (color) => {
    dispatch(selectFirstColor(color));
  };

  const handleColor2 = (color) => {
    dispatch(selectSecondColor(color));
  };

  let [direction, setDirection] = useState("to right top");
  let [grType, setGrType] = useState("linear-gradient");

  // let grType = "linear-gradient";

  let getDocument = document.body.style;
  getDocument.backgroundColor = "none";
  //getDocument.backgroundImage = `${grType} (${direction}, ${color1.hex}, ${color2.hex})`;

  getDocument.backgroundImage = `${grType}(${direction}, ${color1.hex}, ${color2.hex})`;

  //let baseg = `liner-gradient(${direction},${color1.hex},${color2.hex})`

  let cssText = `${grType}(${direction}, ${color1.hex}, ${color2.hex})`;

  const clearBorder = () => {
    let icons = Array.from(iconRef.current.children);
    icons.map((icon) => {
      icon.classList.remove("icon-border");
      // console.log(icon);
    });
  };

  const handleClick = (e, direction) => {
    if (e.target.classList.contains("icon-border")) {
      return;
    }
    clearBorder();
    e.target.classList.add("icon-border");
    setDirection(direction);
  };

  useEffect(() => {
    if (direction == "circle") {
      setGrType("radial-gradient");
    } else {
      setGrType("linear-gradient");
    }
  }, [direction]);

  //console.log(cssText);
  // console.log("from gradient");

  return (
    <div className="gradient">
      <Container fluid>
        <div className="gradient__div">
          <div className="gradient__utility">
            <div className="gradient__arrowbox" ref={iconRef}>
              <i
                className="fas fa-arrow-left gradient__arrowicon toRightTop icon-border"
                onClick={(e) => handleClick(e, "to right top")}
              ></i>
              <i
                className="fas fa-arrow-left gradient__arrowicon toRight"
                onClick={(e) => handleClick(e, "to right")}
              ></i>
              <i
                className="fas fa-arrow-left gradient__arrowicon toRightBottom"
                onClick={(e) => handleClick(e, "to right bottom")}
              ></i>
              <i
                className="fas fa-arrow-left gradient__arrowicon toBottom"
                onClick={(e) => handleClick(e, "to bottom")}
              ></i>
              <i
                className="fas fa-arrow-left gradient__arrowicon toLeftBottom"
                onClick={(e) => handleClick(e, "to left bottom")}
              ></i>
              <i
                className="fas fa-arrow-left gradient__arrowicon toLeft"
                onClick={(e) => handleClick(e, "to left")}
              ></i>
              <i
                className="fas fa-arrow-left gradient__arrowicon toLeftTop"
                onClick={(e) => handleClick(e, "to left top")}
              ></i>
              <i
                className="fas fa-arrow-left gradient__arrowicon toTop"
                onClick={(e) => handleClick(e, "to top")}
              ></i>
              <i
                className="fas fa-undo-alt gradient__arrowicon"
                onClick={(e) => handleClick(e, "circle")}
              ></i>
            </div>
            <div className="gradient__colorbtn">
              <ColorButton
                handleClick={handleColor1}
                color={color1.hex}
              ></ColorButton>
              <ColorButton
                handleClick={handleColor2}
                color={color2.hex}
              ></ColorButton>
            </div>
          </div>
          <div className="gradient__code">
            <h1 className="gradient__headertext">Generate a CSS Gradient</h1>
            <GradientCopy
              css={cssText}
              rgb1={color1.rgb}
              rgb2={color2.rgb}
              direction={direction}
            ></GradientCopy>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gradient;
