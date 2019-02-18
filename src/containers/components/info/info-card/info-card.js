import React from 'react';
import './info-card.css'

const card = (props) => {   
    let icon;
    let classes=['absolute-position', 'font' ,'fas'];
    let small = ['absolute-small']
    if(props.card.percent>0){
        classes.push('fa-arrow-up');
        classes.push('text-success');
        classes.push('rotation-pos');
        small.push('text-success');
    }else{
        classes.push('fa-arrow-down');
        classes.push('text-danger');
        classes.push('rotation-neg');
        small.push('text-danger');
    }
    icon = <i className={classes.join(" ")}></i>;
    return (
        <div className="col-lg col-xl col-md-4 col-sm-6 col-12 position-relative mb-4">
            <div className="text-black-50">{props.card.name}</div>
            <h2>{props.card.value}</h2>
            <small className="form-text text-black-50">Previous 30 days: {props.card.days}</small>
            <span className="float-right">
                {icon}
                <small className={small.join(' ')}>{props.card.percent}%</small>
            </span>
        </div>
    );
}

export default card;