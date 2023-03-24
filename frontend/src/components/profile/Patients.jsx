import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Box, Typography } from "@mui/material";
import { Link } from'react-router-dom'
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"

import './Profile.scss';

const Patients = () => { 
 const PatientsData = [
  {
   id: 0,
   Name: 'Акылбеков Бектур', 
  },
  {id: 1,
  Name: 'Зацепилин Леонид'}
 ]
 return (
  <section className="contact" id="connect">
   <Box sx={{mx: '+500px', height: '1000px'}}>
    <Box sx={{width: '1000px', mx: '+500px'}}>
    <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '45px', marginBlockEnd: '70px', fontWeight: '500'}}>Список записей</Typography>
    <Box
									sx={{
										flexGrow: 1,
										display: { xs: "none", md: "flex" },
          width: "100%",
           flexGrow: 1,
           display: "flex",
           justifyContent: "space-between",
           mx: '-300px'
									}}
								>
									<Typography
										sx={{ my: 2, color: "white", display: "block", fontSize: '20px'}}
									>
										Имя
									</Typography>
									<Typography
										sx={{ my: 2, color: "white", fontSize: '20px' }}
									>
										Фамилия
									</Typography>
									<Typography
										sx={{ my: 2, color: "white", display: "block" , fontSize: '20px'}}
									>
										Почта
									</Typography>
									<Typography
										sx={{ my: 2,  color: "white", display: "block", fontSize: '20px' }}
									>
										Время
									</Typography>
								</Box>
        <Box
									sx={{
										flexGrow: 1,
										display: { xs: "none", md: "flex" },
          width: "100%",
           flexGrow: 1,
           display: "flex",
           justifyContent: "space-between",
           mx: '-300px'
									}}
								>
									<Typography
										sx={{ my: 2, color: "white", display: "block", fontSize: '20px'}}
									>
										Данияр
									</Typography>
									<Typography
										sx={{ my: 2, color: "white", fontSize: '20px' , fontWeight: '300'}}
									>
										Камбаров
									</Typography>
									<Typography
										sx={{ my: 2, color: "white", display: "block" , fontSize: '20px', fontWeight: '300'}}
									>
										daniyar@gmail.com
									</Typography>
									<Typography
										sx={{ my: 2,  color: "white", display: "block", fontSize: '20px', fontWeight: '300'}}
									>
										23.03.2023
									</Typography>
         
								</Box>
        <Box
									sx={{
										flexGrow: 1,
										display: { xs: "none", md: "flex" },
          width: "100%",
           flexGrow: 1,
           display: "flex",
           justifyContent: "space-between",
           mx: '-300px'
									}}
								>
									<Typography
										sx={{ my: 2, color: "white", display: "block", fontSize: '20px', fontWeight: '300'}}
									>
										Элина
									</Typography>
									<Typography
										sx={{ my: 2, color: "white", fontSize: '20px', fontWeight: '300'}}
									>
										Федяева
									</Typography>
									<Typography
										sx={{ my: 2, color: "white", display: "block" , fontSize: '20px', fontWeight: '300'}}
									>
										flowerelina@gmail.com
									</Typography>
									<Typography
										sx={{ my: 2,  color: "white", display: "block", fontSize: '20px', fontWeight: '300'}}
									>
										23.03.2023
									</Typography>
								</Box>
     </Box>
  </Box>
  <Box sx={{
   width: '500px',
   height: '2000px',
   backgroundColor: '#14172F',
   my: '-1000px'
  }}>
   <Typography sx={{color: 'white', fontSize: '50px', fontWeight: '500', mx: '+120px'}}>Профиль</Typography>
  <a className="doctor">
         <Link to='/profile'>
         <button variant='contained' sx={{backgroundColor: '#3B455C', fontSize: '20px'}}>Личный кабинет</button>
         </Link>
         <p/>
         <Link to='/profile/history'>
         <button sx={{color: '#FFFF'}}>История записей</button>
         </Link>
   </a>
  </Box>
</section>
 )
}

export default Patients;