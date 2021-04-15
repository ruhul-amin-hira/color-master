const initState = {
  color: "#12fff8",
};

export const colorPickerReducer = (state = initState, action) => {
  switch (action.type) {
    case "COLOR_PICKER":
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

const initColorState = {
  colors: [],
};

export const selectedColorReducer = (state = initColorState, action) => {
  switch (action.type) {
    case "COLOR_SELECTED":
      const as = state.colors.find((el) => el.solid == action.payload.solid);
      if (as === undefined) {
        return {
          ...state,
          colors: [...state.colors, action.payload],
        };
      }
      return state;
    default:
      return state;
  }
};

const initGradient = {
  color1: { hex: "#12fff8", rgb: "18, 255, 248" },
  color2: { hex: "#096ef7", rgb: "9,110,247" },
};

export const gradientSelect = (state = initGradient, action) => {
  switch (action.type) {
    case "COLOR_FIRST":
      return {
        ...state,
        color1: action.payload,
      };
    case "COLOR_SECOND":
      return {
        ...state,
        color2: action.payload,
      };
    default:
      return state;
  }
};

const initGstate = {
  values: [],
};

export const gradientCopied = (state = initGstate, action) => {
  switch (action.type) {
    case "GRADIENT_COPIED":
      // console.log(action.payload);

      const matched = state.values.find(
        (el) => JSON.stringify(el) == JSON.stringify(action.payload)
      );

      // console.log(matched);
      if (matched === undefined) {
        return {
          ...state,
          values: [...state.values, action.payload],
        };
      }
      return state;
    default:
      return state;
  }
};
