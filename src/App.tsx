import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NoteEditor from "./Components/NoteEditor";
import NotesList from "./Components/NotesList";

export type NoteType = {
  title: string;
  content: string;
};

function App() {
  //All App Logic is here
  const [note, setNote] = useState<NoteType>({ title: "", content: "" });
  const [noteCount, setNoteCount] = useState(0);
  const [allNotes, setAllNotes] = useState<NoteType[]>([]);

  //Save and Load the Notes
  const saveNote = (note: NoteType) => {
    allNotes.push(note);
    setNoteCount(noteCount + 1);
    setAllNotes(allNotes);
    localStorage.setItem("notes", JSON.stringify(allNotes));
  };

  const loadNote = (givenTitle: string) => {
    setNote(findNote(givenTitle));
  };

  //Use Effects
  useEffect(() => {
    getAllNotes();
  }, []);

  //Helper functions
  const getAllNotes = () => {
    const loadedData = localStorage.getItem("notes");
    if (loadedData != null) {
      const loadedAllNotes: NoteType[] = JSON.parse(loadedData);
      setNoteCount(loadedAllNotes.length);
      setAllNotes(loadedAllNotes);
    }
  };

  const findNote = (givenTitle: string): NoteType => {
    const foundNote = allNotes.find((note) => givenTitle === note.title);
    // If a note is found, return it; otherwise, return an empty note
    return foundNote || { title: "", content: "" };
  };

  return (
    <div className="vh-100 ms-2 gridContainer">
      <div className="titleContainer">
        <h1>Note Taker Plus</h1>
      </div>
      <div className="notesListContainer ms-2 p-1">
        <NotesList
          allNotes={allNotes}
          loadNote={loadNote}
          noteCount={noteCount}
        />
      </div>
      <div className="notesEditorContainer">
        <NoteEditor note={note} setNote={setNote} saveNote={saveNote} />
      </div>
    </div>
  );
}

export default App;
