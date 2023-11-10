import React from "react";
import { NoteType } from "../App";

interface NoteListProps {
  allNotes: NoteType[];
  loadNote: (title: string) => void;
  noteCount: number;
}

const NotesList = (props: NoteListProps) => {
  return (
    <>
      <h4>Notes List</h4>
      {props.allNotes.map((note) => (
        <React.Fragment key={note.title}>
          <button
            className="noteListItem"
            onClick={() => props.loadNote(note.title)}
          >
            {note.title}
          </button>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default NotesList;
