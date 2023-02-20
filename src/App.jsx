import './App.css';

import { Route, Routes } from 'react-router-dom';

import GalleryDetail from './components/GalleryDetail';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gallery/:id"
          element={
            <ProtectedRoute>
              <GalleryDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
