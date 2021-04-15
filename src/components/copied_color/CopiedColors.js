import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import GradientCopied from "./GradientCopied";
import SolidCopied from "./SolidCopied";

const CopiedColors = () => {
  return (
    <div className="copied">
      <Container>
        <h1 className="colorHeader">Copied colors</h1>
        <SolidCopied></SolidCopied>
        <GradientCopied></GradientCopied>
      </Container>
    </div>
  );
};

export default CopiedColors;
