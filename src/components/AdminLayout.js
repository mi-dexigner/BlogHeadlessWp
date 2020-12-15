import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Sidebar from './Sidebar'
import '../styles/AdminLayout.css'
import Navbar from './Navbar'
import AppContext from '../context/AppContext'

const AdminLayout = (props) => {
    const [ store, setStore ] = useContext( AppContext );
    return (
        <>
        {!store.loggedIn ? <Redirect to={`/admin/login`} noThrow />:null}
        <Navbar />
        <div className="container-fluid">
        <div className="row">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
               {props.children}
            </main>
        </div>
        </div>
        </>
    )
}

export default AdminLayout
