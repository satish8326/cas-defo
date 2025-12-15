import React, { useEffect } from 'react';
import AppRoutes from './routes';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Cascade Defo';
  }, []);

  return <AppRoutes />;
};

export default App;

