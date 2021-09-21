import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to='/workers/add' className="btn btn-link">Add Worker</Link> 
            <Link to='/schedule/day/1' className="ms-2 btn btn-link">View Schedule</Link>
            <Link to='/adjust_hours' className="ms-2 btn btn-link">Adjust Hours</Link>
            <Link to='/' className="ms-2 btn btn-link">Home</Link>
        </div>
    )
}

export default NavBar
