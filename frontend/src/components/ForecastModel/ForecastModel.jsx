import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container"
import axios from "axios";


import './Forecast.scss'

const ForecastModel = () => {

 const [graphic, setGraphic] = useState()

 const handleKR = () => {
  setGraphic(<img src='img/kyrg.png'/>)
 };

 const handleBish = () => {
  setGraphic(<img src='img/bishkek.png'/>)
 }

 const handleCityOsh = () => {
  setGraphic(<img src='img/city_o.png'/>)
 }

 const handleOsh = () => {
  setGraphic(<img src='img/osh.png'/>)
 }

 const handleIK = () => {
  setGraphic(<img src='img/ik.png'/>)
 }

 const handleJA = () => {
  setGraphic(<img src='img/ja.png'/>)
 }

 const handleNaryn = () => {
  setGraphic(<img src='img/naryn.png'/>)
 }

 const handleChuy = () => {
  setGraphic(<img src='img/chuy.png'/>)
 }

 const handleTalas = () => {
  setGraphic(<img src='img/tal.png'/>)
 }

 const handleBatken = () => {
  setGraphic(<img src='img/batken.png'/>)
 }

 

 return (
  <div className="Forecast">
   <div className="container">
     <h1>ASMDOD</h1>
     <h3>Приложение для составления прогнозов количества больных онкологией в ближайшие годы </h3>
      <h3>Автор: Команова Алия</h3>
      <Container className="cont6"
          component="main"
          sx={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           mr: 60,
           my:11,
           backgroundColor: "none",
           height: "540px",
           width: '3000px',
           borderRadius: "20px",
          }}
         >
          <ButtonGroup size="large" aria-label="outlined" orientation="vertical" variant="contained">
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleKR}>Кыргызстан</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleBish}>г.Бишкек</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleCityOsh}>г.Ош</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleChuy}>Чуйская область</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleNaryn}>Нарынская область</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleIK}>Иссык-Кульская область</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleJA}>Джалал-Абадская область</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleOsh}>Ошская область</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleTalas}>Таласская область</Button>
          <Button sx={{backgroundColor: '#2D3041', width:'377px', height: '60px'}} onClick={handleBatken}>Баткенская область</Button>
      </ButtonGroup>
      <Container className="bbb"
       sx={{my: 9,
        padding: '20px',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#2D3041',
        width: '989px',
        height: '599px',
        mr: '-20%',
        borderRadius: "4px"}}>
         {graphic}
      </Container>
     </Container>
   </div>

  </div>
 )
}

export default ForecastModel;