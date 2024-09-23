import React from 'react'
import '../Components/Navbar.css'
import { Link , Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
    <ul className='navbar' style={{listStyle : 'none', fontStyle: 'Rufina, sans-serif' }}>
      <li className='title' >
      <Link className='name' to="/" > <b>LUXURY RENTALS </b></Link> 
      </li>

      <li className='nav_1'>
      <li className='nav_item'>
      <Link className='nav_text' to="/Villas" > <b>VILLAS </b></Link>  
      </li>
      <li className='nav_item'>
      <Link className='nav_text' to="/AboutUs" > <b>ABOUT US </b></Link>  
      </li>
      <li className='nav_item'>
      <Link className='nav_text' to="/Contact" > <b>CONTACT </b></Link>  
      </li>
      <li>
      <Link className="nav_text" to="/signup"><b>SIGN UP</b></Link>
      </li>
      <li>
      <Link className="nav_text" to="/login"><b>LOGIN</b></Link>
      </li>

      </li>
    </ul>
    </nav>

    <Outlet/>

    </>
  )
}

export default Navbar