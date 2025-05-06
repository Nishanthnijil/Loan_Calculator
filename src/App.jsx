import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/Notfound";
import ErrorPage from "./Components/Errorpage";
import ExchangeRates from './Components/ExchangeRates';

const AppWrapper = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/error', '*'];

  // You can match using logic (more flexible than exact string match)
  const shouldHideNavbar = ['/error'].includes(location.pathname);
  
  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/exchangerate" element={<ExchangeRates />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
