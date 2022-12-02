import React from "react";
import "./stepbar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepBar = ({ page, onPageNumberClick }: any) => {
  var stepPercentage = 0;
  if (page === "pageOne") {
    stepPercentage = 16;
  } else if (page === "pageTwo") {
    stepPercentage = 49.5;
  } else if (page === "pageThree") {
    stepPercentage = 82.5;
  } else if (page === "pageFour") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default StepBar;
