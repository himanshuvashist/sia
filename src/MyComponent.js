import React, { useState } from "react";

export default function MyComponent() {
  const [inputVal, setInputVal] = useState("");
  const [textToShow, setTextToShow] = useState("");
  return (
    <div className="p-6">
      <input onChange={(e) => setInputVal(e.target.value)} />
      <button
        className="p-1 bg-indigo-700 text-slate-50 rounded-md ml-4"
        onClick={() => {
          setTextToShow(inputVal);
        }}
      >
        button
      </button>
      <div>{textToShow}</div>
    </div>
  );
}
