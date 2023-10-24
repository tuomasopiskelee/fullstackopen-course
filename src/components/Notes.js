import React, { useState, useEffect, useCallback } from "react";

// const notes = [
//   { name: "Note A", id: "1" },
//   { name: "Note B", id: "2" },
//   { name: "Note C", id: "3" },
// ];

function Notes() {
  const [notes, setNotes] = useState([]);

  const fetchNotesHandler = useCallback(async () => {
    let url = '';
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      url = "http://localhost:3001/api/notes";
    } else {
      url = "/api/notes";
    }

    const response = await fetch(url);
    const data = await response.json();
    setNotes(data);
  });

  useEffect(() => {
    fetchNotesHandler();
  }, [fetchNotesHandler]);

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
