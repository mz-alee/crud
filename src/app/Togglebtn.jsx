import React, { useState } from "react";

const Togglebtn = () => {
  const [isOn, setisOn] = useState(false);
  const handletoggle = () => {
    setisOn(!isOn);
  };
  return (
    <div
      className="toggle"
      style={{ background: isOn ? "green" : "grey" }}
      onClick={handletoggle}
    >
      <div className={`toggleBtn ${isOn ? "On" : "off"}`}>
        <span className="toggleState">{isOn ? "on" : "off"}</span>
      </div>
    </div>
  );
};

export default Togglebtn;
