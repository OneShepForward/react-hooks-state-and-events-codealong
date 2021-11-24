import React, { useState }  from "react";

function Toggle() {
  const [isOn, setToggle] = useState(false);

  function stateToggle() {
      setToggle((isOn) => !isOn)
  }

  const color = isOn? "red" : "white";

  return <button onClick={stateToggle} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
