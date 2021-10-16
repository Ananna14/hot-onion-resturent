import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <div >
            <Link className="header" to="/home">Home</Link>
            <Link className="header" to="/breakfast">BreakFast</Link>
            <Link className="header" to="/lunch">Lunch</Link>
            <Link className="header" to="/dinner">Dinner</Link>
        </div>
    )
}

export default Nav
