import React from 'react';
import './cards.css';
import Card from './card/card'


const cards = (props) => 
    props.cards.map( ( card ) => {
        return <Card card={card} key={card.id}/>
      } 
);

export default cards;