import React, { useState, useEffect, useCallback } from "react";
import {getRemoteData} from '../services/fetchRemoteData';

function Phones(){

    const [phones, setPhones] = useState([]);


  const fetchPhonesHandler = useCallback(async () => {
    let data = await getRemoteData("persons");
    setPhones(data);
  });

  useEffect(() => {
    fetchPhonesHandler();
  }, []);

  return (
    <>
      <p>
        <button onClick={fetchPhonesHandler}>Fetch Phones</button>
      </p>
      {phones && (
        <ul>
          {phones.map((item) => (
            <li>{item.phone} : {item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Phones;