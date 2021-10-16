import React, { useEffect, useState } from 'react'
import SingleItem from './SingleItem';
import './Onion.css'

const Onion = () => {
    const [homes, setHomes] = useState([]);
    useEffect(()=>{
        fetch('home.json')
        .then(res=> res.json())
        .then(data => setHomes(data))
    })
    return (
        <div className="container">
           {
               homes.map(home=><SingleItem
               key={home.name}
                 home={home}
                 ></SingleItem>)
           }
        </div>
    )
}

export default Onion
