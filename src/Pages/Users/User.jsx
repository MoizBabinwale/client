import React from 'react'
import { Link } from 'react-router-dom'

import './Users.css'
import logo from "../../favicon.ico"


const User = ({ user }) => {
    return (
        <Link to={`/Users/${user._id}`} className='user-profile-link'>
            <h3><img src={logo} width={20} height={20} alt={logo} /></h3>
            <h4>{ user.name }</h4>
        </Link>
    )
}

export default User
