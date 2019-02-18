import React from 'react';
import './leads.css';
import Lead from './lead/lead'

const leads = (props) => 
    props.leads.map( ( lead ) => {
        return <Lead lead={lead} key={lead.id}/>
    } 
);

export default leads;