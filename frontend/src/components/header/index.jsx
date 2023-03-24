import * as React from "react"
import { Navbar, Nav, Container } from "react-bootstrap";
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
// import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
// import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import { Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import Button from '../buttons/index';
import Auth_Buttons from '../buttons/reg_button'
import { authContext } from "../../contexts/AuthContext"
import { HashLink } from 'react-router-hash-link';
import {
 BrowserRouter as Router
} from "react-router-dom";

import './navbar.scss'

const settings = ["Profile", "Account", "Dashboard"]

const Header = () => {
 const [activeLink, setActiveLink] = useState('home');
 const [scrolled, setScrolled] = useState(false);

 useEffect(( )=> {
  const  onScroll = () => {
   if (window.scrollY) {
    setScrolled(true);
   } else {
    setScrolled(false)
   }
  }
  window.addEventListener('scroll', onScroll);
 }, [])

 const onUpdateActiveLink = (value) => {
  setActiveLink(value)
 }

 return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>О проекте</Nav.Link>
              <Nav.Link href="/" className={activeLink === '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Главная</Nav.Link>
              <Nav.Link href="https://github.com/aliiavgh/ASMDOD_project" className={activeLink === 'https://github.com/aliiavgh/ASMDOD_project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Code</Nav.Link>
            </Nav>
            <a className="navbar-text">
              <HashLink to='/profile'>
                <button variant='contained' sx={{backgroundColor: '#3B455C'}}>Профиль</button>
                 {/* <button sx={{color: '#FFFF'}}>Войти</button> */}
              </HashLink>
              <HashLink to='http://127.0.0.1:8000/admin/patient/patient/'>
                {/* <button variant='contained' sx={{backgroundColor: '#3B455C'}}>Зарегистрироваться</button> */}
                 <button sx={{color: '#FFFF'}}>Пациенты</button>
              </HashLink>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
 );

 // return (
 //        <div className='header'>
 //            <div className='container'>
 //                <div className='header'>
 //                    <ul>
 //                      <li> <a href="/about">О проекте</a> </li>
 //                      <li> <a href="/">Главная</a> </li>
 //                      <li> <a href="https://github.com/aliiavgh/ASMDOD_project">API</a> </li>
 //                      <li> <a href="home/hello/Documents/coding/CANCER/img/f_LT (3).pdf">Статья</a> </li>
 //                     </ul>
     
 //                </div>

 //                <Box>
 //                 <Typography>
 //                  { user }
 //                 </Typography>
 //                 <div className='auth'>
 //                   <Auth_Buttons />
 //                </div>
 //                </Box>
               
 //            </div>
 //        </div>
        
 //    );
}

export default Header;
