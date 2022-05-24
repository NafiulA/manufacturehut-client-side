import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div className='flex justify-between items-center px-5 text-accent'>
                    <h3 className='text-2xl my-5'>Welcome to your dashboard.</h3>
                    <label for="dashboard" class=" lg:hidden"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>
                </div>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin && <>
                        <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        <li><Link to="/dashboard/addreview">Add a Review</Link></li>
                    </>}
                    {admin && <>
                        <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
                        <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;