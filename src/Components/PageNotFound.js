import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='container'>
        <div className='row mt-5'>
        <div className='col-12 mt-5 mx-5'>
            <h1>404 Error Page</h1>
            <p>Sorry, This page doesn't exist</p>
            <NavLink className="btn btn-info" to="/"> Go Back </NavLink>
        </div>
        </div>    
        </div>
    );
}

export default PageNotFound;