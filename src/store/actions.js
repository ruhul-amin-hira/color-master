export const colorPickerColor = (color) => {
  return {
    type: "COLOR_PICKER",
    payload: color,
  };
};

export const selectedSolidColor = (solid, rgb) => {
  return {
    type: "COLOR_SELECTED",
    payload: {
      solid,
      rgb,
    },
  };
};

export const selectFirstColor = (color) => {
  const extractRgb = Object.values(color.rgb);
  const rgb = extractRgb.join(",");

  return {
    type: "COLOR_FIRST",
    payload: {
      hex: color.hex,
      rgb: rgb,
    },
  };
};

export const selectSecondColor = (color) => {
  const extractRgb = Object.values(color.rgb);
  const rgb = extractRgb.join(",");
  return {
    type: "COLOR_SECOND",
    payload: {
      hex: color.hex,
      rgb: rgb,
    },
  };
};

export const gradientCopiedColor = (colorText, rgb1, rgb2, direction) => {
  // const rgbvalue1 = Object.values(rgb1).join(",");
  // const rgbValue2 = Object.values(rgb2).join(",");
  return {
    type: "GRADIENT_COPIED",
    payload: {
      colorText,
      rgb1,
      rgb2,
      direction,
    },
  };
};
