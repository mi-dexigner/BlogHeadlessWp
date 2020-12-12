import React from 'react'
import AdminLayout from '../components/AdminLayout'

const Dashboard = () => {

  const userName = localStorage.getItem('userName')
    return (
        <>
           <AdminLayout>
           <div className="bg-light p-5">
					<h4>Welcome to {userName && userName }!!</h4>
			</div>
           </AdminLayout>
        </>
    )
}

export default Dashboard
