import React, { useState, useEffect, useCallback } from "react";
import {getRemoteData} from '../services/getRemoteData';

// const notes = [
//   { name: "Note A", id: "1" },
//   { name: "Note B", id: "2" },
//   { name: "Note C", id: "3" },
// ];

function Notes() {
  const [notes, setNotes] = useState([]);


  const fetchNotesHandler = useCallback(async () => {
    let data = await getRemoteData("notes");
    setNotes(data);
  });

  useEffect(() => {
    fetchNotesHandler();
  }, []);

  return (
    <>
      <p>
        <button onClick={fetchNotesHandler}>Fetch Notes</button>
      </p>
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
