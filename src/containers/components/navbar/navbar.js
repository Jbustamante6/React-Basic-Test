import React from 'react';
import './navbar.css';

const navbar = (props) => {
    
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-large border-bottom">
            <a href="/" className="navbar-brand button-brand" >
                <i className="fab fa-react"></i>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a href="/" className="nav-link" >Workflows</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" >Schedule</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link" >Reports</a>
                    </li> 
                </ul>

                <div className="icons-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="navbar-text mx-3" >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="navbar-text mx-3" >
                                <i className="fas fa-cog"></i>                       
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="navbar-text mx-3" >
                                <i className="fas fa-bell"></i>
                            </a>
                        </li>
                        <li className="nav-item dropleft">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"  className="profile-image mx-2"/> 
                                Rae
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default navbar;