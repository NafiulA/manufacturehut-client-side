import { signOut } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const UserRow = ({ index, user, refetch }) => {
    const handleMakeAdmin = (email) => {
        fetch(`https://manufacturehut.onrender.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    toast.success(`${res?.message}`, { id: "adminError" })
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Successfully made an admin", { id: "adminSuccess" });
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user?.name}</td>
            <td>{user.email}</td>
            <td>{user.role ? "Admin" : <button onClick={() => handleMakeAdmin(user.email)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;