import React from 'react';
import './follow.css';
import Actions from './actions/actions'


const follow = (props) => 
    props.follows.map( ( action ) => {
        return <Actions action={action} key={action.id}/>
      } 
);

export default follow;