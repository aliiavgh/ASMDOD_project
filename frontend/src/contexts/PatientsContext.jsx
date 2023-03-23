import React, { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

export const patientContext = createContext();

const INIT_STATE ={ 
    patient: JSON.parse(localStorage.getItem("patient")),
};



function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_PATIENTS":
            return {...state, patient: action.payload};
            default:
                console.log("");
    }
}

const PatientContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const navigate = useNavigate();
    
    const getPatients = () => {
        let patient = JSON.parse(localStorage.getItem("patient"));

        if (!patient) {
            localStorage.setItem(
                "patient",
                JSON.stringify({ patients: []})
            );
            patient = {
                patients: [],
            };
            dispatch({
                type: "GET_PATIENTS",
                payload: patient,
            });
        }
    };

    // const addStudioToFav = (product) => {
    //     let patient = JSON.parse(localStorage.getItem("patient"));

    //     if (!patient) {
    //         patient = {
    //             patients: [],
    //         };
    //     }

    //     let newProd = {
    //         item: patient,
    //         count: 1,
    //     };

    //     let productToFind = patient.products.filter(
    //         (elem) => elem.item.id === product.id
    //     );

    //     if (productToFind.length === 0) {
    //         patient.products.push(newProd);
    //     } else {
    //         patient.products = patient.products.filter(
    //             (elem) => elem.item.id !== product.id
    //         );
    //     }

    //     // patient.products.push(newProd);
    //     localStorage.setItem("patient", JSON.stringify(patient));

    //     navigate("/patient")

    //     dispatch({
    //         type: "GET_PATIENTS",
    //         payload: patient,
    //     });
    // };

    // function checkProductInpatient(id) {
    //     let patient = JSON.parse(localStorage.getItem("patient"));

    //     if (patient) {
    //         let newFav = patient.products.filter((elem) => elem.item.id === id);
    //         return newFav.length > 0 ? true : false;
    //     } else {
    //         patient = {
    //             product: [],
    //         };
    //     }
    // }

    function deletePatient(id) {
        let patient = JSON.parse(localStorage.getItem("patient"));

        patient.patients = patient.patients.filter((elem) => elem.item.id !== id);

        localStorage.setItem("patient", JSON.stringify(patient));
        getPatient();
        dispatch({
            type: "GET_PATIENTS",
            payload: patient,
        });
    }
    return (
        <cartContext.Provider
        value={{
            getPatient,
            // addStudioToFav,
            deletePatient,
            patient: state.patient,
        }}>
            {children}
        </cartContext.Provider>
    );
};

export default PatientContextProvider;