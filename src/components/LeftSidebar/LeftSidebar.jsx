import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Globe from  '../../assets/Globe.svg'


    //Using Inline Function and the The Logical Not (!) to toggle state
    const LeftSidebar = () => {
        const [icon, menu] = useState(false)
    return (
            <div className='left-sidebar'>
        <button id="menu" onClick={() => menu(!icon)}>
            <div className="bar" id="bar1"></div>
            <div className="bar" id="bar2"></div>
            <div className="bar" id="bar3"></div>
         </button>
         {icon &&(
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
            )}
        </div>
    )
}

export default LeftSidebar
