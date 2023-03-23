import React, { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

export const userContext = createContext();

const INIT_STATE = {
 id: JSON.parse(localStorage.getItem('id')),
 email: JSON.parse(localStorage.getItem('email')),
 first_name: JSON.parse(localStorage.getItem('first_name')),
 last_name: JSON.parse(localStorage.getItem('last_name'))
};

function reducer(state = INIT_STATE, action) {
 switch (action.type) {
     case "FET_EMAIL":
         return {...state, email: action.payload};
         default:
             console.log("");
 }
}

const profileContextProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, INIT_STATE);

 const navigate = useNavigate();

 const getUserInfo = () => {
  let id = JSON 
 }
    
}



