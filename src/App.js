import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Cookies from 'js-cookie';

import ToastProvider from './components/toast/toastProvider.jsx';
import LoginPage from './pages/login/loginPage.jsx';
import CommentsPage from './pages/comments/commentsPage.jsx';
import Nav from './components/nav/nav.jsx';

function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    Cookies.remove('token');
    setIsLogedin(false);
  };

  // ** Effects
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsLogedin(true);
    } else {
      setIsLogedin(false);
    }
  }, [location]);

  return (
    <ToastProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/comments"
          element={
            <>
              <Nav handleLogout={handleLogout} />
              <CommentsPage isLogedin={isLogedin} />
            </>
          }
        />
      </Routes>
    </ToastProvider>
  );
}

export default App;
