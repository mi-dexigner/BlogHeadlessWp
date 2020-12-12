import React from 'react'
import { Redirect } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../styles/AdminLayout.css'
import Navbar from './Navbar'

const AdminLayout = ({children}) => {
    const loggedIn = localStorage.getItem('loggedIn')
    return (
        <>
        {!loggedIn ? <Redirect to={`/login`} noThrow />:null}
        <Navbar />
        <div className="container-fluid">
        <div className="row">
            <Sidebar />
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
               {children}
            </main>
        </div>
        </div>
        </>
    )
}

export default AdminLayout
