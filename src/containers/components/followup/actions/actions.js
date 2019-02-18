import React from 'react';
import './actions.css'

const actions = (props) => { 

    let itemClass = [];
    let agoClass = [];
    if(props.action.type===1){
        itemClass.push('bg-red');
        itemClass.push('border-left-danger');
        agoClass.push('font-weight-bold');
        agoClass.push('text-danger')
    }
    return(
        <li  className={`list-group-item ${itemClass.join(" ")}`}>
            <div className="row">
                <div className="col-6">
                    <div className="circle-icon">
                        <i className="fas fa-phone"></i>
                    </div>
                    <p className="ml-5 mb-0 mt-1 text-dark list-text">{props.action.description}</p>
                    <p className="ml-5 text-primary list-subtext">{props.action.from} <i className="fas fa-angle-right"></i> {props.action.to}</p>

                </div>
                <div className="col-3">
                    <p className="mb-0 mt-1 text-dark list-text">{props.action.date}</p>
                    <p className={`list-subtext ${agoClass.join(" ")}`}>{props.action.dayAgo}</p>

                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-outline-primary btn-block">View</button>
                </div>
            </div>
        </li>

    );

}
export default actions;