import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ToastProvider from './components/toast/toastProvider.jsx';
import LoginPage from './pages/login/loginPage.jsx';
import CommentsPage from './pages/comments/commentsPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/comments" element={<CommentsPage />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
