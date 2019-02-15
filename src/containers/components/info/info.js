import React from 'react';
import './info.css';
import Card from './info-card/info-card'


const info = (props) => 
    props.info.map( ( card, index ) => {
        return <Card card={card} key={card.id}/>
      } 
);

export default info;