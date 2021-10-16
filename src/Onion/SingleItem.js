import React from 'react'
import './SingleItem.css'


const SingleItem = ({home}) => {
    const{img, name, price, discription} = home;
    return (
        <div className="single-item">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{discription}</p>
            <h1>{price}</h1>
        </div>
    )
}

export default SingleItem
