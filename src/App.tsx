import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import FeedPage from './pages/Feed';
import FeedDetailPage from './pages/FeedDetail';
import LoginPage from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/feed"
              element={
                <NavBar>
                  <FeedPage />
                </NavBar>
              }
            />
            <Route
              path="/feed/:uuid"
              element={
                <NavBar>
                  <FeedDetailPage />
                </NavBar>
              }
            />
            <Route path="*" element={<Navigate to="/feed" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
