import React from "react";

export default function MyComponentWrapper({ children }) {
  return (
    <div className="p-6">
      <div className="bg-stone-100 bor border-solid border-slate-500 border-4 rounded-md">
        TODO
        {children}
      </div>
    </div>
  );
}
