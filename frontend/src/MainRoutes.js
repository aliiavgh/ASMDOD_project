import React from 'react';
import { Route, Routes } from "react-router-dom";
import Register from './pages/Registration/index'
import NotFound from './pages/NotFound';
import Forecast from './pages/Forecast/Forecast';
import Diagnostics from './pages/Diagnosis/Diagnostics';
import Home from './pages/Home/index';


const MainRoutes = () => {
  return (
  <Routes>
   <Route path='/register' element={<Register />} />
   <Route path='/' element={<Home />} />
   <Route path='/404' element={<NotFound />} />
   <Route path='/forecast' element={<Forecast />} />
   <Route path='/diagnostics' element={<Diagnostics />} />
  </Routes>
  );
};

export default MainRoutes;
