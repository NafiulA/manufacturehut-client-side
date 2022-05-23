import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    }
    const menu =
        <>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/dashboard">Dashboard</Link></li>
            <li> <Link to="/blogs">Blogs</Link></li>
            <li> <Link to="/portfolio">My Portfolio</Link></li>
            {user ? <button onClick={handleLogout} className='btn btn-ghost'>Log Out</button> : <li> <Link to="/login">Login</Link></li>}
        </>

    return (
        <div className="navbar bg-base-100 z-50">
            <div className="navbar-start">
                <Link to="/" className="text-xl font-semibold pl-5">ManufactureHut</Link>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal pr-5 hidden lg:flex">
                    {menu}
                </ul>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;