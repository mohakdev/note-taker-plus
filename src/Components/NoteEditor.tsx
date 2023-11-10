import React, { useState } from "react";
import { NoteType } from "../App";

interface NoteEditorProps {
  note: NoteType;
  setNote: (note: NoteType) => void;
  saveNote: (noteToSave: NoteType) => void;
}

const NoteEditor = (props: NoteEditorProps) => {
  //Handling input changes
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedNote: NoteType = { ...props.note, title: event.target.value };
    props.setNote(updatedNote);
  };
  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedNote: NoteType = {
      ...props.note,
      content: event.target.value,
    };
    props.setNote(updatedNote);
  };

  return (
    <>
      <input
        value={props.note.title}
        onInput={handleTitleChange}
        className="fs-3 m-1 w-100"
        type="text"
        placeholder="Title"
      ></input>
      <br></br>
      <textarea
        className="fs-6 m-1 h-75 w-100"
        placeholder="Content..."
        value={props.note.content}
        onInput={handleContentChange}
      ></textarea>
      <br></br>
      <button
        onClick={() => props.saveNote(props.note)}
        className="button rounded fs-4 m-1"
      >
        SAVE NOTE
      </button>
    </>
  );
};

export default NoteEditor;
