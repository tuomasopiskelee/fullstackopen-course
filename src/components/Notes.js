import React, { useState, useEffect, useCallback } from "react";
import { saveRemoteData, getRemoteData } from "../services/fetchRemoteData";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("new note");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    };
    saveRemoteData("notes", noteObject);
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const fetchNotesHandler = useCallback(async () => {
    let data = await getRemoteData("notes");
    setNotes(data);
  });

  useEffect(() => {
    fetchNotesHandler();
  }, []);

  return (
    <>
      {/* <button onClick={fetchNotesHandler}>Fetch Notes</button> */}
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      {notes && (
        <ul>
          {notes.map((item) => (
            <li>{item.content}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Notes;
