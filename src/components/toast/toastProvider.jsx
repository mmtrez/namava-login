import React, {useState, useContext} from 'react';
import Toast from './toast.jsx';

const ToastContext = React.createContext(null);

let id = 1;

const ToastProvider = ({children}) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (content) => {
    setToasts((toasts) => [
      ...toasts,
      {
        id: id++,
        content,
      },
    ]);
  };

  const removeToast = (id) => {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      {toasts.map(({id, content}) => (
        <Toast key={id} id={id}>
          {content}
        </Toast>
      ))}
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export {useToast};
export default ToastProvider;
