import React from 'react';
import  PropTypes from 'prop-types';
import classNames from "classnames";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from'react-router-dom'


const Auth_Buttons = ({ onClick, className, outline, children }) => {
    return(
     <ButtonGroup
     disableElevation
     aria-label="Disabled elevation buttons"
     sx={{
      mx: '82%',
      my: -1,
     }}
   >
     <Link to='/register'>
     <Button variant='contained' sx={{backgroundColor: '#3B455C'}}>Зарегистрироваться</Button>
     </Link>
     <Link to='/login'>
     <Button sx={{color: '#FFFF'}}>Войти</Button>
     </Link>
     
   </ButtonGroup>
    );
};

Button.propTypes = {
    onclick: PropTypes.func,
};

export default Auth_Buttons;