import React, { useState, useEffect } from 'react';
import PasswordModal from './PasswordModal';

const STORAGE_KEY = 'brokerAccessGranted';

function ProtectedRoute({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [checking, setChecking] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const forceModal = params.get('forceModal') === '1';
      const value = localStorage.getItem(STORAGE_KEY);
      if (value === 'true') {
        setAuthorized(true);
        setChecking(false);
      } else if (!forceModal) {
        setShowModal(true);
        setChecking(false);
      } else {
        setShowModal(true);
        setChecking(false);
      }
    } catch (e) {
      setShowModal(true);
      setChecking(false);
    }
  }, []);

  function handleSuccess() {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {}
    setAuthorized(true);
    setShowModal(false);
  }

  function handleCancel() {
    // Mantém o modal; usuário pode navegar para outra rota manualmente
    setShowModal(true);
  }

  if (checking) return null;

  if (!authorized && showModal) {
    return <PasswordModal onSuccess={handleSuccess} onCancel={handleCancel} />;
  }

  return children;
}

export default ProtectedRoute;


