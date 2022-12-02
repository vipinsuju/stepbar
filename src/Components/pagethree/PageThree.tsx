import React from "react";

const PageThree = ({ onButtonClick }: any) => {
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
        onClick={() => onButtonClick("pageFour")}
      >
        Nav to page 4
      </button>
    </div>
  );
};

export default PageThree;
