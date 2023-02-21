import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import AuthContextProvider from './contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
import Header from './components/header/index'
import Footer from './components/footer/index'

import './styles/index.scss';
import 'macro-css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <Router>
    <React.StrictMode>
     <Header />
     <App />
     <Footer />
   </React.StrictMode>
</Router>
);


