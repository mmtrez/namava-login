import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ToastProvider from './components/toast/toastProvider.jsx';
import Login from './pages/login/login.jsx';
import Comments from './pages/comments/comments.jsx';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
