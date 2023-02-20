import './Home.css';

import Quotes from '../components/Quotes';
import { useUser } from '../context/userContext';
const Home = () => {
  const { user } = useUser();
  return (
    <main className='home'>
      {user == null ? (
        <p>Please, Log in first</p>
      ) : (
        <h2>Welcome to our community, {user}</h2>
      )}
      <Quotes />
    </main>
  );
};

export default Home;
