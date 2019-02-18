import React from 'react';
import './appointment.css'

const appointment = (props) => { 
   
    return(
        <li  className={`list-group-item ${props.appointment.status===1 ? 'bg-red border-left-danger':''}`}>
            <div className="row">
                <div className="col-12">
                    <div className="circle-icon">
                        <i className="fas fa-asterisk"></i>
                    </div>
                    <p className="ml-5 mb-0 mt-1 text-dark list-text">{props.appointment.description}</p>
                    <p className={`ml-5 list-subtext ${props.appointment.status===1 ? 'text-danger font-weight-bold':'text-black-50'}`}>{props.appointment.ago}</p>
                </div>
            </div>
        </li>

    );

}
export default appointment;