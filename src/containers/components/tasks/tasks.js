import React from 'react';
import './tasks.css';
import Task from './task/task'

const tasks = (props) => 
    props.tasks.map( ( task ) => {
         return <Task task={task} key={task.id}/>
     } 
);

export default tasks;