import React from 'react'

const SingleDinner = ({dinner}) => {
    const{img, name, price, discription} = dinner;
    return (
        <div className="single-item">
             <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{discription}</p>
            <h1>{price}</h1>
        </div>
    )
}

export default SingleDinner
