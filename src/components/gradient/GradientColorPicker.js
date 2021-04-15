import React, { useEffect } from "react";
import ColorPicker, { useColor } from "react-color-palette";
import { useDispatch } from "react-redux";
import { selectGradientColor } from "../../store/actions";

const GradientColorPicker = (props) => {
  const { color, handleChange } = props;
  const [color2, setColor2] = useColor("hex", color);
  //const dispatch = useDispatch();

  // useEffect(() => {
  //   const timeinterval = setInterval(() => {
  //     handleChange(color2);
  //   }, 10);
  //   return () => {
  //     clearInterval(timeinterval);
  //   };
  // }, [color2]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleChange(color2);
    }, 5);
    return () => {
      clearTimeout(timeout);
    };
  }, [color2]);

  //console.log("from GradientColorPicker");

  return (
    <div>
      <ColorPicker
        width={200}
        height={150}
        color={color2}
        onChange={setColor2}
        hideHSB
      />
    </div>
  );
};

export default GradientColorPicker;
