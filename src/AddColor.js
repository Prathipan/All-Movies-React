import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("red");
  const [colorList, setColorList] = useState(["orange", "green", "blue"]);
  const styles = {
    background: color,
  };
  // const colorList = ["orange","green","blue"]
  const addcolor = () => {
    setColorList([...colorList, color]);
  };
  return (
    <div>
      <input
        style={styles}
        onChange={(e) => setColor(e.target.value)}
        className="input-box"
        placeholder="Enter a color"
        value={color} />
      <button className="add-button" onClick={addcolor}>
        Add
      </button>
      {colorList.map((clr, i) => {
        return <ColorBox key={i} color={clr} />;
      })}
    </div>
  );
}
