import React from "react";

export default function Task() {
  return (
    <div className="p-6">
      <div className="bg-indigo-100 text-stone-900 font-sans border-indigo-300 border-4 rounded-md p-4">
        <h4 className="text-2xl">Task</h4>
        <p>
          {" "}
          There should be a <strong>input field</strong> and a{" "}
          <strong>button </strong>. If we click on button after typing
          something, we should be able to see that last input's value below it.
        </p>
      </div>
    </div>
  );
}
