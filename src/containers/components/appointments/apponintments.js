import React from 'react';
import './appointments.css';
import Appointment from './appointment/appointment'

const appointments = (props) => 
    props.appointments.map( ( appointment ) => {
         return <Appointment appointment={appointment} key={appointment.id}/>
     } 
);

export default appointments;