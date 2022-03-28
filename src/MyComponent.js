/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function MyComponent() {
  const first = ["tomato", "onion", "potato"];
  const second = ["pink"];
  const third = [];
  // ==============================
  const [firstState] = useState(["tomato", "onion", "potato"]);
  const [secondState] = useState(["pink"]);
  const [thirdState] = useState([]);
  return (
    <div className="p-6">
      ⚒️⚒️⚒️
      <div>go inside the MyComponent.js file to edit me.🙃</div>
    </div>
  );
}
