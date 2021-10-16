import React, { useEffect, useState } from 'react'
import SingleBreak from './SingleBreak'

const BreakFast = () => {
    const [foods, setFoods] = useState([])

    useEffect(()=>{
        fetch('breakfast.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    })
    return (
        <div className="container">
            {
                foods.map(food=><SingleBreak
                    key={food.name}
                    food={food}
                    ></SingleBreak>)
            }
        </div>
    )
}

export default BreakFast
