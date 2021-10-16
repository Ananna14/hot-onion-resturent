import React, { useEffect, useState } from 'react'
import SingleLunch from './SingleLunch'

const Lunch = () => {
    const [lunchs, setLunchs] = useState([])
    useEffect(()=>{
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setLunchs(data))

    })
    return (
        <div className="container">
           {
               lunchs.map(lunch=><SingleLunch
                key= {lunch.name}
                lunch={lunch}
                ></SingleLunch>)
           }
        </div>
    )
}

export default Lunch
