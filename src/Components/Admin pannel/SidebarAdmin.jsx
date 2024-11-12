import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarAdmin = () => {
  return (
    <div   style={{ minHeight: '100vh', width: '230px', backgroundColor:'black'  }}>
      <div style={{paddingLeft:'10px' , color:'white'}}>
        <h1 ><b>Admin Panel</b></h1>
      </div>
      <nav style={{display:'grid'  }} className="">
      <NavLink style={{padding:'20px' , fontSize:'18px' , textDecoration:'none' ,color:'white'}}
          to="/admin"
          end
          className={({ isActive }) => 'nav-link' + (isActive ? ' active bg-secondary' : '')}
        >
          <b>Dashboard</b>
        </NavLink>
        <NavLink style={{padding:'20px' , fontSize:'18px' , textDecoration:'none' , color:'white'}}
          to="/admin/create-villa"
          className={({ isActive }) => 'nav-link' + (isActive ? ' active bg-secondary' : '')}
        >
          <b>Create Villa</b>
        </NavLink>
        <NavLink style={{padding:'20px' , fontSize:'18px' , textDecoration:'none' ,color:'white'}}
          to="/admin/villa-list"
          end
          className={({ isActive }) => 'nav-link' + (isActive ? ' active bg-secondary' : '')}
        >
          <b>Villa List</b>
        </NavLink>
      </nav>
    </div>
  );
};

export default SidebarAdmin;
