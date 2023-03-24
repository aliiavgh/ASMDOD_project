import React, { useRef, useState } from "react";
import './Diagm.scss';
import axios from "axios";
// import Button from '../../components/buttons/index'
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container"


const DiagnosticsNeuralNetwork = () => {

 const filePicker = useRef(null)

 const [selectedFile, setSelectedFile] = useState(null);
 const [upload, setUpload] = useState();
 const [result, setResult] = useState(null);
 const [response, setResponse] = useState();

 const handleChange = (event) => {
  console.log(event.target.files);
  setSelectedFile(event.target.files[0])
 };


 const handleUpload = () => {
  // filePicker.current.click();

  if (!selectedFile) {
   alert('Загрузите изображение');
   return;
  };

 const formData = new FormData();
  formData.append('picture', selectedFile);
  const config = {headers: {'Authorization': 
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5NjU2OTUzLCJpYXQiOjE2Nzk2MjA5NTMsImp0aSI6IjJiN2I0ZmVkYWFjMzQxZjA4YzE5NTJmNGRlNjAzNGMwIiwidXNlcl9pZCI6OX0.CqgblqhKmIrb1WB9yv_0ClGB0H6c0oTL66LI_0rv--M'},}
  const url = 'http://127.0.0.1:8000/api/v1/diagnostics/'
  axios.post(url, formData, config).then((resp) => setResult(resp.data))
 };

 const handlePick = () => {
  filePicker.current.click();
 };

 const handleResult = async () => {
  if (!result) {
   alert('Загрузите изображение');
   return;
  };

  const formData = new FormData();
  formData.append('form_key', result.form_key)
  formData.append('picture', selectedFile)
  const config = {headers: {'Authorization': 
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc5NjU2OTUzLCJpYXQiOjE2Nzk2MjA5NTMsImp0aSI6IjJiN2I0ZmVkYWFjMzQxZjA4YzE5NTJmNGRlNjAzNGMwIiwidXNlcl9pZCI6OX0.CqgblqhKmIrb1WB9yv_0ClGB0H6c0oTL66LI_0rv--M'},}
  axios.post('http://127.0.0.1:8000/api/v1/diagnostics/result/', formData, config).then((res) => setResponse( res.data.Есть))
 };

 return (
  <div className="container">
   <h1>ASMDOD</h1>
   <h3>Приложение для распознавания рака молочной железы. </h3>
   <h3>Автор: Аскаров Акыл</h3>
   <br/>
   <h3>Загрузите гистопатoологическое изображение  ткани молочной железы в 
     формате .png или .jpeg</h3>
   <Container className="cont6"
          component="main"
          sx={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           height: "400px",
           // borderRadius: "20px",
          }}
         >
          <ButtonGroup size="large" aria-label="outlined" orientation="vertical" variant="contained">
             <input type='file' ref={filePicker} onChange={handleChange} accept='.png,.jpg,.jpeg,' />
             <Button onClick={handlePick} sx={{backgroundColor: '#594067', width: '730px', height: '100px', borderRadius: "20px"}}>Загрузить изображение</Button>
              
              <Button onClick={handleUpload} sx={{backgroundColor: '#594067', width: '730px', height: '100px'}}>Начать диагностику</Button>

              <Button onClick={handleResult} sx={{backgroundColor: '#594067', width: '730px', height: '100px', borderRadius: "20px"}}>Получить результат</Button>

        </ButtonGroup>
      </Container>

      <Container component="main"
          sx={{
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           height: "400px",
           width: "730px",
           backgroundColor: '#3B455C',
           borderRadius: "20px"
          }}>
      <div className="response">
          <h1>Вероятность наличия опухоли:</h1>
         <h1>{response}</h1>
         <br />
        </div>
      </Container>
      <h3> Числа, приближенные к 1 - вероятность наличия опухоли высокая, к 0 - низкая </h3>


  </div>
 );
};

export default DiagnosticsNeuralNetwork;
