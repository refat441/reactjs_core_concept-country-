import React, { useEffect, useState } from 'react';
import './Countrys.css'
import Country_s from '../Country_s/Country_s';

const Countrys = () => {

    const[countrys, setCountrys] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountrys(data))
    },[])

    return (
        <div>
            <h1>Country data: {countrys.length}</h1>
            <div className='country_contain'>
            {
                // countrys.map(countryname => <Country_s country={countryname} key={Country_s.cca3}></Country_s>)
                countrys.map((countryname) => (
                    <Country_s key={countryname.name.common} country={countryname}/>
                ))
            }
            </div>
        </div>
    );
};

export default Countrys;