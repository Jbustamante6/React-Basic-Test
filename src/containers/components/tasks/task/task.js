import React from 'react';
import './task.css'

const task = (props) => { 
   
    return(
        <li  className={`list-group-item ${props.task.status===1 ? 'bg-red border-left-danger':''}`}>
            <div className="row">
                <div className="col-12">
                    <div className="circle-icon">
                        <i className="fas fa-phone"></i>
                    </div>
                    <p className="ml-5 mb-0 mt-1 text-dark list-text">{props.task.description}</p>
                    <p className={`ml-5 list-subtext ${props.task.status===1 ? 'text-danger font-weight-bold':'text-black-50'}`}>{props.task.ago}</p>
                </div>
            </div>
        </li>

    );

}
export default task;