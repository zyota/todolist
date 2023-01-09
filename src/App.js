import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, SetValue] = useState("");
  const [todos, SetToDos] = useState();
  const todo = [];
  const inputChange = (event) => {
    SetValue(event.target.value);

    console.log("value is:", event.target.value);
  };
  const AddToDo = (todo) => {};
  return (
    <div className="App">
      <input type="text" onChange={inputChange} />
      <button onClick={AddToDo}>Add</button>
      <ul>{}</ul>
    </div>
  );
}

export default App;
