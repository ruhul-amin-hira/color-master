import { combineReducers } from "redux";
import {
  colorPickerReducer,
  selectedColorReducer,
  gradientSelect,
  gradientCopied,
} from "./reducers";

const rootReducer = combineReducers({
  currentColor: colorPickerReducer,
  copyToClickboard: selectedColorReducer,
  gradientSelect,
  gradientCopied,
});

export default rootReducer;
