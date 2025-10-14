import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientePage from './pages/ClientePage';
import CorretorPage from './pages/CorretorPage';
import RegulamentoPage from './pages/RegulamentoPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientePage />} />
      <Route
        path="/corretor"
        element={
          <ProtectedRoute>
            <CorretorPage />
          </ProtectedRoute>
        }
      />
      <Route path="/regulamento" element={<RegulamentoPage />} />
    </Routes>
  );
}

export default App;