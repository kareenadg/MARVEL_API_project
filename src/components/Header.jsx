import './Header.css';

import { NavLink } from 'react-router-dom';

import { useUser } from '../context/userContext';

const Header = () => {
  const logo =
    'https://res.cloudinary.com/dlvbfzkt9/image/upload/v1676745257/MARVEL/jfmwkbh6amqepygamtwn.png';
  const { user, logout } = useUser();
  return (
    <header>
      <nav>
        <img src={logo} alt="Marvel logo" />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>{user !== null && <NavLink to="/gallery">Gallery</NavLink>}</li>
          <li>{user == null && <NavLink to="/login">Log in</NavLink>}</li>
          <li>{user !== null && <button onClick={() => logout()}>Log out</button>}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
