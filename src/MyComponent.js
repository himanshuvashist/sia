import React, { useState } from "react";

export default function MyComponent() {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="p-6">
      <input onChange={(e) => setInputVal(e.target.value)} />
      <div>{inputVal}</div>
    </div>
  );
}
