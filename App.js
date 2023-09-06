import React from 'react';
import { UserProvider } from './components/app/user/utilities/UserContext';
import { NewsProvider } from './components/app/news/utilities/NewsContext';
import AppNavigation from './components/app/navigation/AppNavigation';

import PhuDao from './components/demo/PhuDao/PhuDao';
import PhuDao2 from './components/demo/PhuDao/PhuDao2';





const App = () => {

  return (
    // <PhuDao2/>


    <UserProvider>
      <NewsProvider>
        <AppNavigation />
      </NewsProvider>
    </UserProvider>
  );
};

export default App;