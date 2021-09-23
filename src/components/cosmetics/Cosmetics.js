import React, { useEffect, useState } from 'react';
import { add, multiply, substract } from '../../utilities/Storage';

const Cosmetics = () => {
    const [cosmetics,setCosmetic] = useState([])
    useEffect(()=>{
        fetch('./Cosmetics.json')
        .then(res=>res.json())
        .then(data => setCosmetic(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Cosmetics;