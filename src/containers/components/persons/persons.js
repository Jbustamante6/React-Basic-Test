import React from 'react';
import './persons.css';
import Person from './person/person'

const persons = (props) => 
    props.persons.map( ( person ) => {
        return <Person person={person} key={person.id}/>
    } 
);

export default persons;