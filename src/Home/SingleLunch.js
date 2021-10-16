import React from 'react'

const SingleLunch = ({lunch}) => {
    const{img, name, price, discription} = lunch;
    return (
        <div className="single-item">
             <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{discription}</p>
            <h1>{price}</h1>
        </div>
    )
}

export default SingleLunch
