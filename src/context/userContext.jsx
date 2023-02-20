import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    if (localStorage.getItem('user')) {
      return localStorage.getItem('user');
    } else {
      return null;
    }
  });

  const login = async (data) => {
    setUser(data);
    navigate('/', { replace: true });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login', { replace: true });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
