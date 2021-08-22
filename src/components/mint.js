import React from "react";

export default function Mint() {
  const OnClick = () => {
    return window.location.replace(
      "https://www.google.com/search?q=google&rlz=1C5CHFA_enUS952US952&oq=goog&aqs=chrome.0.69i59j69i57j69i59j69i60l5.651j0j4&sourceid=chrome&ie=UTF-8"
    );
  };
  return (
    <button
      onClick={OnClick}
      style={{
        background: "none",
        border: "none",
        fontSize: "38px",
        fontWeight: "bolder",
        padding: "10px",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "15px"
      }}
    >
      mint
    </button>
  );
}
