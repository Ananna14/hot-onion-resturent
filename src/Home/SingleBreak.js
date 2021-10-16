import React from 'react'

const SingleBreak = ({food}) => {
    const{img, name, price, discription} = food;
    return (
        <div className="single-item">
             <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{discription}</p>
            <h1>{price}</h1>
        </div>
    )
}

export default SingleBreak
