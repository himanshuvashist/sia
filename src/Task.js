import React from "react";

export default function Task() {
  return (
    <div className="p-6 text-left">
      <div className="bg-indigo-100 text-stone-900 font-sans border-indigo-300 border-4 rounded-md p-4">
        <h4 className="text-2xl">Task</h4>
        <p>we have three arrays :</p>
        <br />
        <p>["tomato", "onion", "potato"]</p>
        <p>["pink"]</p>
        <p>[]</p>
        <br />
        <strong>
          show all three array's item in DOM below, inside html tags
        </strong>
        <div className="text-left">
          <li>first using the normal const defined in the MyComponent.js </li>
          <li>then using the state variables</li>
          <li>
            {" "}
            and at last tell if there is any diffrence between render it using
            the normal variables and with states
          </li>
        </div>
      </div>
    </div>
  );
}
