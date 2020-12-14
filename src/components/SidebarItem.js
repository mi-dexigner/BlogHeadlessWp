import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarItem = ({url,name}) => {
    return (
            <li className="nav-item">
                <NavLink 
                    to={`/admin${url}`}
                    className="nav-link"
                    activeClassName='active'
                    ><span data-feather="home"></span> {name}</NavLink>
                    </li>
    )
}

export default SidebarItem
