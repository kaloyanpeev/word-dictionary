import React from "react";
import { StyledLoadingDiv } from "./LoadingDots.styles";

const LoadingDots = () => {
  return (
    <StyledLoadingDiv>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoadingDiv>
  );
};

export default LoadingDots;
