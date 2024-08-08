import React from "react";
import { useState } from "react";
const Counter = () => {
  const [number, setNumber] = useState(0);
  const incrementNumber = () => {
    setNumber(number + 1);
  };
  const decrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  const resetNumber = () => {
    setNumber(0);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Use full viewport height
        backgroundColor: "#D1E9F6",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "20vh",
          width: "60vh",
          padding: "10px",
          backgroundColor: "#Ffffff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          borderColor: "#fffff",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            width: "13vh",
          }}
        >
          <span
            style={{
              font: "inherit",
              fontFamily: "sans-serif",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Counter
          </span>
          <span
            style={{
              font: "inherit",
              fontFamily: "sans-serif",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {number}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "40vh",
            margin: "20px",
          }}
        >
          <button
           style={{
            backgroundColor: "#7C00FE",
            color: "#ffff",
            padding: "15px",
            borderRadius: "10px",
            border: "#ffff",
            width: "12vh",
            fontSize: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Apply box shadow
            cursor: "pointer", // Change cursor to pointer on hover
            transition: "all 0.3s ease",
          }}
            title="increment"
            onClick={incrementNumber}
          >
            {" "}
            Increment
          </button>
          <button
            style={{
                backgroundColor: "#7C00FE",
                color: "#ffff",
                padding: "15px",
                borderRadius: "10px",
                border: "#ffff",
                width: "12vh",
                fontSize: "20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Apply box shadow
                cursor: "pointer", // Change cursor to pointer on hover
                transition: "all 0.3s ease",
              }}
            title="decrement"
            onClick={decrementNumber}
          >
            {" "}
            Decrement
          </button>
          <button
            style={{
              backgroundColor: "#7C00FE",
              color: "#ffff",
              padding: "15px",
              borderRadius: "10px",
              border: "#ffff",
              width: "12vh",
              fontSize: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Apply box shadow
              cursor: "pointer", // Change cursor to pointer on hover
              transition: "all 0.3s ease",
            }}
            title="Reset"
            onClick={resetNumber}
          >
            {" "}
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
