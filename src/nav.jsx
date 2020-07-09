import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () =>{
    return(
        <div className="nav">
            <h2>My Gaming Box</h2>
            <ul className="ulwrapper">
                <Link to="/about">
                <li>About</li>
                </Link>
                <Link to="/shop">
                <li>shop</li>
                </Link>
                <Link to="/">
                <li>Home</li>
                </Link>
            </ul>
        </div>
    )
}
export default Nav