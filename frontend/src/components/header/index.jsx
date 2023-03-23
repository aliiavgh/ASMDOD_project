import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
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

import './navbar.scss'

const settings = ["Profile", "Account", "Dashboard"]

function Header() {
 const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)
 const { setUser } = React.useContext(authContext)

 useEffect(() => {
		let user = localStorage.getItem("username")

		if (user) {
			setUser(user)
		}
	}, [])

 const { user } = React.useContext(authContext)


	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const navigate = useNavigate()

 // return (
 //  <AppBar position="sticky">
 //   <Container>
 //    <Toolbar>
 //     <div>
 //      <Box>
 //       <Box>
 //        <Button>
 //         О проекте
 //        </Button>
 //       </Box>
 //      </Box>
 //     </div>
 //    </Toolbar>
 //   </Container>
 //  </AppBar>
 // )

 return (
        <div className='header'>
            <div className='container'>
                <div className='navbar'>
                    <ul>
                      <li> <a href="/about">О проекте</a> </li>
                      <li> <a href="/">Главная</a> </li>
                      <li> <a href="https://github.com/aliiavgh/ASMDOD_project">API</a> </li>
                      <li> <a href="home/hello/Documents/coding/CANCER/img/f_LT (3).pdf">Статья</a> </li>
                     </ul>
     
                </div>

                <Box>
                 <Typography>
                  { user }
                 </Typography>
                 <div className='auth'>
                   <Auth_Buttons />
                </div>
                </Box>
               
            </div>
        </div>
        
    );
}

export default Header;
