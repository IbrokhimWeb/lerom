import React, { useContext } from 'react';
import { ApiContex } from '../../contex/ApiContext';

function About(props) {
    const api = useContext(ApiContex);
    console.log(api);
    return (
        <>
            <h1>{}</h1>   
        </>
    );
}

export default About;