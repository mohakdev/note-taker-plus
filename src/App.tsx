import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NoteEditor from "./Components/NoteEditor";
import NotesList from "./Components/NotesList";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Note Taker Plus</h1>
      </div>
      <div className="row">
        <div className="col-3">
          <NotesList />
        </div>
        <div className="col">
          <NoteEditor />
        </div>
      </div>
    </div>
  );
}

export default App;
