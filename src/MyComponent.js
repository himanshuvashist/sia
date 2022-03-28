/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function MyComponent() {
  const first = ["tomato", "onion", "potato"];
  const second = ["pink"];
  const third = [];
  // ==============================
  const [firstState, setFirstState] = useState(["tomato", "onion", "potato"]);
  const [secondState] = useState(["pink"]);
  const [thirdState] = useState([]);
  return (
    <div
      className="p-6"
      onClick={() => {
        //this piece of code is to show that there is a diffrence between state and normal variables, if we update normal variable it does not reflected into the DOM, but if we update the state if does reflect the change into the DOM. because every time the state gets udpated , the component re-renders
        first.pop();
        const newFirstState = [...firstState];
        newFirstState.pop();
        console.log(first);
        setFirstState(newFirstState);
      }}
    >
      <div className="bg-slate-200 mb-2 rounded-md">
        <p>using variables</p>
        {first.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        {second.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        {third.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
      <div className="bg-slate-200 mb-2 rounded-md">
        <p>using state</p>
        {firstState.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        {secondState.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        {thirdState.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </div>
    </div>
  );
}
