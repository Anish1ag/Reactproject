import Dot from "./Dot";
import { useState } from "react";
function Can() {
  const [data, setData] = useState("anish");
  function changenameanish() {
    setData("sushan");
  }
  function changenamesushan() {
    setData("anish");
  }
  return (
    <div className="b">
      <Dot />
      {data}
      <button
        onClick={() => {
          changenameanish();
        }}
      >
        sushan
      </button>
      <button
        onClick={() => {
          changenamesushan();
        }}
      >
        anish
      </button>
      <input type="text" placeholder="Search.." />
    </div>
  );
}

export default Can;
