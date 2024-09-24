import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import FeedPage from './pages/Feed';
import FeedDetailPage from './pages/FeedDetail';
import LoginPage from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/:uuid" element={<FeedDetailPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
