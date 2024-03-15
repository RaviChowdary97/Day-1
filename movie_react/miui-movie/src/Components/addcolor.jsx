import { useState } from "react";
export const AddColor = () => {
  const [colorVal, setColorVal] = useState("green");
  const [colorList, setcolorList] = useState([colorVal]);
  const inputStyle = {
    backgroundColor: colorVal,
    color: "white",
  };
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={colorVal}
        onChange={(e) => setColorVal(e.target.value)}
        style={inputStyle}
      />
      <button
        onClick={() => {
          // console.log(colorVal)
          setcolorList([...colorList, colorVal]);
          console.log(colorList);
        }}
      >
        Add Color
      </button>
    </>
  );
};
