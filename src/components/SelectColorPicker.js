import React, { useEffect } from "react";
import ColorPicker, { useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { colorPickerColor } from "../store/actions";

const SelectColorPicker = () => {
  const getColor = useSelector((state) => state.currentColor.color);
  const [color, setColor] = useColor("hex", getColor);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(colorPickerColor(color.hex));
    }, 5);

    return () => {
      clearTimeout(timeout);
    };
  }, [color]);

  return (
    <div className="colorpicker_box">
      <ColorPicker
        width={250}
        height={250}
        color={color}
        onChange={setColor}
        hideHSB
      />
    </div>
  );
};

export default SelectColorPicker;
