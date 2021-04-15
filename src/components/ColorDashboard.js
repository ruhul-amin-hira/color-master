import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import ColorLists from "./ColorLists";
import SelectColorPicker from "./SelectColorPicker";

const ColorDashboard = () => {
  // const getCopiedColor = useSelector((state) => state.copyToClickboard);
  // console.log(getCopiedColor);

  return (
    <div>
      <Container fluid className="colorDash">
        <div className="colorDash__con">
          <div className="colorpicker_con">
            <SelectColorPicker></SelectColorPicker>
          </div>
          <div className="colors_con">
            <div className="colors__headerbox">
              <h1 className="colorHeader">Colors</h1>
              <p className="colors__copytext">click on code to copy color</p>
            </div>

            <div className="colors_con2">
              <ColorLists></ColorLists>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ColorDashboard;
