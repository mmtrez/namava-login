import React from 'react';

import ToastProvider from './components/toast/toastProvider.jsx';
import Login from './pages/login.jsx';

function App() {
  return (
    <ToastProvider>
      <Login />
    </ToastProvider>
  );
}

export default App;
