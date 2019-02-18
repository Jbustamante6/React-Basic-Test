import React from 'react';
import './lead.css'

const lead = (props) => { 

    let button =  <button type="button" className="btn btn-outline-primary btn-block">View</button>;
    let listClass = [];
    let pClass = [];
    let point = null;
    let classIcon = null;
    if(props.lead.assigned==null){
        button = <button type="button" className="btn btn-primary btn-block">Assing</button>
        point =<i className="fas fa-circle text-primary point"></i>
    }
    if(props.lead.status===2){
        listClass.push('bg-blue');
        listClass.push('border-left-prymary');
        pClass.push('font-weight-bold');
    }else if(props.lead.status===1){
        listClass.push('bg-red');
        listClass.push('border-left-danger');
        pClass.push('font-weight-bold');
        classIcon='text-danger'
    }
    return(
        <li  className={`list-group-item ${listClass.join(" ")}`}>
            <div className="row">
                <div className="col-9">
                    <i className={`fas fa-bullseye icon ${classIcon}`}></i>
                    {point}
                    <p className="ml-5 mb-0 mt-1 text-dark list-text">{props.lead.name}</p>
                    {props.lead.assigned ? (
                            <p className={`ml-5 list-subtext text-black-50 ${pClass.join(" ")}`}>{props.lead.company} | Assigned to <span className="text-primary">{props.lead.assigned}</span></p>
                        ):(
                            <p className={`ml-5 list-subtext text-black-50 ${pClass.join(" ")}`}>{props.lead.company} | Unassigned</p>
                        )
                    }

                </div>
                
                <div className="col-3">
                   {button}
                </div>
            </div>
        </li>

    );

}
export default lead;