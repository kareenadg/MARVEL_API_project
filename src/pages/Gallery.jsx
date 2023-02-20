import './Gallery.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacter, setFilteredCharacter] = useState([]);

  useEffect(() => {
    fetch('https://63ef88eb4d5eb64db0cbc71f.mockapi.io/avengers')
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res);
        setFilteredCharacter(res);
      });
  }, []);

  const filterChar = (keyword) => {
    const filter = characters.filter(
      (char) =>
        char.character.toLowerCase().includes(keyword.toLowerCase()) ||
        char.realname.toLowerCase().includes(keyword.toLowerCase()),
    );
    setFilteredCharacter(filter);
  };

  return (
    <main className="gallery">
      <div className="filters">
        <input
          type="text"
          onChange={(ev) => filterChar(ev.target.value)}
          placeholder="Search..."
        />
        <button onClick={() => setFilteredCharacter(characters)}>ALL</button>
        <h3>Species:</h3>
        <button
          onClick={() => {
            const humans = characters.filter((char) => char.species == 'Human');
            setFilteredCharacter(humans);
          }}
        >
          HUMANS
        </button>
        <button
          onClick={() => {
            const nonHumans = characters.filter((char) => char.species == 'Non Human');
            setFilteredCharacter(nonHumans);
          }}
        >
          NON HUMANS
        </button>
        <button
          onClick={() => {
            const enhanced = characters.filter((char) => char.species == 'Enhanced');
            setFilteredCharacter(enhanced);
          }}
        >
          ENHANCED
        </button>
        <h3>Status:</h3>
        <button
          onClick={() => {
            const alive = characters.filter((char) => char.status == 'Alive');
            setFilteredCharacter(alive);
          }}
        >
          ALIVE
        </button>
        <button
          onClick={() => {
            const deceased = characters.filter((char) => char.status == 'Deceased');
            setFilteredCharacter(deceased);
          }}
        >
          DECEASED
        </button>
        <button
          onClick={() => {
            const unknown = characters.filter((char) => char.status == 'Unknown');
            setFilteredCharacter(unknown);
          }}
        >
          UNKNOWN
        </button>
      </div>
      <div className="gallery-container">
        {filteredCharacter.map((character) => (
          <figure key={character.id}>
            <img src={character.image} alt={character.character} />
            <h3>{character.character}</h3>
            <h4>{character.realname}</h4>
            <figcaption>
              {character.species} | {character.status}
            </figcaption>
            <Link to={`/gallery/${character.id}`}>＋</Link>
          </figure>
        ))}
      </div>
    </main>
  );
};

{
  /* 
        <button onClick={() => setFilteredCharacter(characters)}>ALL</button>
        <h3>Species:</h3>
        {characters &&
          characters.map((char) => (
            <button onClick={() => char.status === status}>{char.status}</button>
          ))}
      </div>
       */
}

export default Gallery;
