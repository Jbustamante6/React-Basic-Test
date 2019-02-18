import React from 'react';
import './card.css'

const card = (props) => {   
    return(
        <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12 mb-3">
            <div className={`card text-white shadow ${props.card.bg}`} >
                <div className="card-body">
                    <h6 className="card-subtitle">{props.card.product}</h6>
                    <h5 className="card-title">{props.card.workflow}
                        <i className="fas fa-circle ml-2 text-success"></i>
                    </h5>
                    <div className="members row">
                        <i className="fas fa-circle text-white"></i>
                        <i className="fas fa-circle text-muted"></i>
                        <i className="fas fa-circle text-dark"></i>
                        <p className="card-text">{props.card.members} members</p>
                    </div>

                    <div className="row info">
                        <div className="col-4 text-center p-0">
                            <i className="fas fa-circle"></i>
                            <label>LEADS</label>
                            <p>{props.card.leads}</p>
                        </div>
                        <div className="col-4 text-center p-0">
                            <i className="fas fa-circle"></i>
                            <label>W/L</label>
                            <p>{props.card.wl}</p>
                        </div>
                        <div className="col-4 text-center p-0">
                            <i className="fas fa-circle"></i>
                            <label>CONVERSION</label>
                            <p>{props.card.conversion}</p>
                        </div>
                    </div>

                    <button type="button" className="btn btn-link text-white menu">
                        <i className="fas fa-ellipsis-v"></i>
                    </button>

                </div>
            </div>
        </div>
    );

}
export default card;