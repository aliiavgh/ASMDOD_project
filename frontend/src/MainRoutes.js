import React from 'react';
import { Route, Routes } from "react-router-dom";
import Register from './components/auth/Registration';
import Login from './components/auth/Login';
import NotFound from './pages/NotFound';
import Forecast from './pages/ForecasrPage';
import Diagnostics from './pages/DiagnosticsPage';
import DiagnosticsNeuralNetwork from './components/DiagnosisNeuralNetwork/DiagnosticsNeuralNetwork';
import ForecastModel from './components/ForecastModel/ForecastModel';
import Profile from './components/profile/PersonalArea';
import Home from './pages/HomePage';
import Patients from './components/profile/Patients';


const MainRoutes = () => {
  return (
  <Routes>
   <Route path='/register' element={<Register />} />
   <Route path='/login' element={<Login />} />
   <Route path='/profile' element={<Profile />} />
   <Route path='/profile/history' element={<Patients />} />
   <Route path='/' element={<Home />} />
   <Route path='/404' element={<NotFound />} />
   <Route path='/forecast' element={<ForecastModel />} />
   <Route path='/diagnostics' element={<DiagnosticsNeuralNetwork />} />
  </Routes>
  );
};

export default MainRoutes;
