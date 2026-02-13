import { useState } from "react";
import "./App.css";
import { Hello } from "./Hello";

function App() {
  const [name, setName] = useState<string>("<default name>");
  const [newName, setNewName] = useState<string>("");

  const onValidate = () => {
    setName(newName);
    setNewName("");
  };

  return (
    <>
      <Hello name={name}>
        <span>Welcome here</span>
      </Hello>
      <input
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button onClick={onValidate}>Ok</button>
    </>
  );
}

export default App;
