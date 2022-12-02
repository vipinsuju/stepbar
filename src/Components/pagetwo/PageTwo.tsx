import React from "react";
//import "./PageTwo.css";

const PageTwo = ({ onButtonClick }: any) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: "#664DE5",
          border: "none",
          height: "50px",
          width: "100px",
          color: "white",
          borderRadius: "10px",
          marginTop: 70,
          cursor: "pointer",
        }}
        onClick={() => onButtonClick("pageThree")}
      >
        Nav to page 3
      </button>
    </div>
  );
};

export default PageTwo;
