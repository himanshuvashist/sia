import "./App.css";
import Task from "./Task";
import MyComponent from "./MyComponent";
import MyComponentWrapper from "./MyComponentWrapper";

function App() {
  return (
    <div className="App bg-slate-50 h-screen">
      <div className="grid grid-rows-2">
        <div className="row-span-12">
          <Task />
        </div>
        <div className="row-span-12">
          <MyComponentWrapper>
            <MyComponent />
          </MyComponentWrapper>
        </div>
      </div>
    </div>
  );
}

export default App;
