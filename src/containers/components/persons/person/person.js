import React from 'react';
import './person.css'

const person = (props) => { 
   
    return(
        <li  className='list-group-item'>
            <div className="row">
                <div className="col-12">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"  className="image-icon"/> 

                    <p className="ml-5 mb-0 mt-1 text-dark list-text">{props.person.name}</p>
                    <p className='ml-5 list-subtext text-muted'>{props.person.description}</p>
                </div>
            </div>
        </li>

    );

}
export default person;