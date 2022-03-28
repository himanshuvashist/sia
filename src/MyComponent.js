/* eslint-disable no-unused-vars */
import React, { useState } from "react";


const a = [<li>one</li>, <li>three</li>, <li>four</li>]
export default function MyComponent() {
  const [b] = useState([<li>state one</li>, <li>state two</li>, <li>state three</li>])
  return (
    <div className="p-6">
      ⚒️⚒️⚒️
      <div>go inside the MyComponent.js file to edit me.🙃</div>
    </div>
  );
}
