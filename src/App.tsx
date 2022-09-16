/* node-modules */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* context */
import { AuthProvider } from './context/AuthContext';

/* routes */
import AppRouter from './routes/AppRouter';

/* styles */
import CustomGlobalStyles from './globalStyles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        />
        <CustomGlobalStyles/>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
  );
}

export default App;
