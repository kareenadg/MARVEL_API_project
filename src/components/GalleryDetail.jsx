import './GalleryDetail.css';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const GalleryDetail = () => {
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://63ef88eb4d5eb64db0cbc71f.mockapi.io/avengers')
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.filter((item) => item.id === id));
      });
  }, []);

  return (
    <main className='gallerydetail'>
      <button onClick={() => navigate('/gallery')}>BACK</button>
      <div className="abilities">
        {characters.map((character) => (
          <div key={character.id}>
            <h3>ABILITIES:</h3>
            <p>{character.abilities}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryDetail;
