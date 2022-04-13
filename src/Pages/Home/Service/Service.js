import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, picture, price, desription} = service;


    const navigate= useNavigate();
    const navigateToService = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='sevice-container'>
            <img src= {picture} alt="" />
            <h1>Name: {name}</h1>
            <p>Price: {price}</p>
            <p><small>Desc: {desription}</small></p>
            <button onClick={() => navigateToService(id)} className='btn btn-primary'>Book This Service</button>
        </div>
    );
};

export default Service;