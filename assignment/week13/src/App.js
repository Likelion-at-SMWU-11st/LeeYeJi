import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

{/* 아래부터 작성해 주세요! */}
const App = () => {
  return (
  <>
  <Routes>
    <Route path='/:category?' element={<NewsPage/>} />
  </Routes>
  </>
  );
};

export default App;