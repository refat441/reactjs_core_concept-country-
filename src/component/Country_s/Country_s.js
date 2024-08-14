import React from 'react';
import './Country_s.css'

const Country_s = (props) => {
    const {area, region, name, population,flags} = props.country;
    return (
        <div className='mystyle'>
            <p>area: {area}</p>
            <p>resion: {region}</p>
            <p>name: {name.common}</p>
            <p>population: {population}</p>
            <img className='flag-size' src={flags.png} />
        </div>
    );
}; 

export default Country_s;