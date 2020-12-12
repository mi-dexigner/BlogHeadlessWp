import React from 'react'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    const userName = localStorage.getItem('userName')
    return (
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                
                    <SidebarItem 
                        url={ `/dashboard/${ userName }` }
                        name="Dashboard"
                    />
                    <SidebarItem 
                        url={ `/post-new` }
                        name="Posts"
                    />
                    <SidebarItem 
                        url={ `/page-new` }
                        name="Pages"
                    />
                    <SidebarItem 
                        url={ `/media` }
                        name="Media"
                    />
                    <SidebarItem 
                        url={ `/users` }
                        name="Users"
                    />
                
					
                    </ul>
				</div>
        </nav>
    )
}

export default Sidebar
