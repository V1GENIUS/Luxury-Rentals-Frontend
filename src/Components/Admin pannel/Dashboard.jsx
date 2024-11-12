import React from 'react'
import SidebarAdmin from './SidebarAdmin'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
    <div className='dashboard'style={{display:'flex'}}>
        <SidebarAdmin/>
        <div>
        <div style={{marginInlineStart:'330px' , fontSize:'25px'}} >
            <h1>Admin Dashboard</h1>
        </div>
        <div style={{display:'flex'}}>
            <div className='all_villass'>
           <h3>Total Villas</h3> 
           <b >5</b>
            </div>
            <div className='all_villass'>
           <h3>Booked Villas</h3> 
           <b >5</b>
            </div>
            <div className='all_villass'>
           <h3>Unbooked Villas</h3> 
           <b >5</b>
            </div>
        </div>
        <div style={{display:'flex' , marginTop:'50px'}}>
            <div className='all_villass'>
           <h3>Today's earn</h3> 
           <b >5</b>
            </div>
            <div className='all_villass'>
           <h3>Total Earn</h3> 
           <b >5</b>
            </div>
            <div className='all_villass'>
           <h3>Revenue</h3> 
           <b >5</b>
            </div>
        </div>


        </div>
      </div>
    </>
  )
}

export default Dashboard