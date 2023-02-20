import { Navigate } from 'react-router-dom';

import { useUser } from '../context/userContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  if (user == null) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
