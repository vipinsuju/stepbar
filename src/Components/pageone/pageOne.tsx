import React from "react";
//import "./PageOne.css";

const PageOne = ({ onButtonClick }: any) => {
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
          cursor:"pointer"
        }}
        onClick={() => onButtonClick("pageTwo")}
      >
        Nav to page 2
      </button>
    </div>
  );
};

export default PageOne;
