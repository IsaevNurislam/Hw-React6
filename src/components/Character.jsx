import React, { useState, useEffect } from "react";
import Render from "./Render";

const Character = () => {

  const [characters, setCharacter] = useState([]);

  const getApi = async () => {

    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacter(data.results);

    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {

    getApi();
  
  }, []);

  return (

    <>
      {characters.map((character) => (

        <Render

          key={character.id}
          name={character.name}
          status={character.status}
          image={character.image}
          species={character.species}
          location={character.location}
          
        />

      ))}
    </>

  );
};

export default Character;
