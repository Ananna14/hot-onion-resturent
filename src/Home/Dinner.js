import React, { useEffect, useState } from 'react'
import SingleDinner from './SingleDinner'

const Dinner = () => {
    const [dinners, setDinners] = useState([])

    useEffect(()=>{
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinners(data))
    })
    return (
        <div className="container">
          {
              dinners.map(dinner=><SingleDinner
              key={dinner.name}
                 dinner={dinner}></SingleDinner>)
          }
        </div>
    )
}

export default Dinner
