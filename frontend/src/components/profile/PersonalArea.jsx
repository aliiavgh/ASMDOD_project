import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from'react-router-dom'
import { Box, Typography } from "@mui/material";

import './Profile.scss';


const Profile = () => {

 const [data, setInfo] = useState()

 const doctorInfo = [
  {
   id: 1,
   Name: 'Мин Алексей', 
   Email: 'min.alexey@gmail.com'
  }
 ]

 const Patients = [
  {
   id: 0,
   Name: 'Акылбеков Бектур', 
  },
  {id: 1,
  Name: 'Зацепилин Леонид'}
 ]


 const handlePersonalArea = () => {
   setInfo(doctorInfo)
 }


 const handlePatients = () => {
   setInfo(Patients)
 }

 return (
  <section className="contact" id="connect">
   <Box sx={{mx: '+500px', height: '1000px', width: '1000px'}}>
    <Box sx={{mx: '+500px'}}>
    <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '45px', marginBlockEnd: '70px', fontWeight: '500'}}>Личный кабинет</Typography>
     <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '25px', marginBlockEnd: '20px'}}>Имя:</Typography>
     <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '25px', marginBlockEnd: '20px'}}>Фамилия:</Typography>
     <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '25px', marginBlockEnd: '20px'}}>Почта:</Typography>
     <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '25px', marginBlockEnd: '20px'}}>Номер телефона:</Typography>
    </Box>

    <Box sx={{width: '200px', mx: '+1000px', my: '-230px'}}>
    <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '25px', marginBlockEnd: '20px', fontWeight: '300'}}>Алия</Typography>
     <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '25px', marginBlockEnd: '20px', fontWeight: '300'}}>Команова</Typography>
     <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '25px', marginBlockEnd: '20px', fontWeight: '300'}}>aliyakomanovaa@gmail.com</Typography>
     <Typography sx={{mx: '-300px', my: '+10px', color: 'white', fontSize: '25px', marginBlockEnd: '20px', fontWeight: '300'}}>0555051011</Typography>
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

export default Profile
