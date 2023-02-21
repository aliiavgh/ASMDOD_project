import React,  { useEffect, useState }  from 'react';

import './styles/index.scss';
import 'index.scss';

import MainRoutes from './MainRoutes';
import { ThemeProvider } from "@mui/material/styles";

import Header from './components/header/index'
import Footer from './components/footer/index'

function App() {
  return (
   <div className="wrapper">
    {/* <Header /> */}
    {/* <ThemeProvider> */}
      <MainRoutes />
    {/* </ThemeProvider> */}
    {/* <Footer /> */}
		</div>
  );
};

export default App;
