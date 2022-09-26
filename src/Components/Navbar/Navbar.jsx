import React, { useContext } from 'react'
import './Navbar.css'
import { FaCat } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AuthContext, FirebaseContext } from '../store/Context';
import { useNavigate } from 'react-router-dom'




function Navbar() {

    const { user } = useContext(AuthContext)
    const { firebase } = useContext(FirebaseContext)
    const Navigate = useNavigate()


    return (
        <div className='containerw'>

            <img src="assets/greenlogo.png" alt="" className='logo-img' />
            <input id='jj' className="search" type="text" placeholder="Search for pets..." /><GoSearch id='search-icon' />
            <Link to="/login" >
            </Link>
            <button className='btnzz'>{user ? `welcome-:${user.displayName}` : "LOGIN"}</button>
            {user ? <MdLogout onClick={() => {
                firebase.auth().signOut();
                Navigate('login')

            }} className='logout-icon' /> : null}

            {/* <a> <button className='btnzz'>LOGIN</button></a> */}

            <Link to="/create"><h6 className='nav-text'>Become a Seller</h6></Link>
            <FaCat id='cart' />



        </div>
    )
}

export default Navbar