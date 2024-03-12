import { useState } from "react";

export const AddColor1 = () => {
  const [color, setColor] = useState("green");

  const [colorList, setcolorList] = useState(color);
  const inputStyle = {
    backgroundColor: color,
    color: "black",
  };
  const divStyle = {
    height: "30px",
    width: "300px",
    backgroundColor: colorList,
  };
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={inputStyle}
      />
      <button
        onClick={() => {
          console.log(color);
          setcolorList(color);
        }}
      >
        Add Color
      </button>
      <div style={divStyle}></div>
    </>
  );
};
