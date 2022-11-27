import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery("alluser", () => fetch("https://manufacturehut.onrender.com/user", {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => <UserRow
                        key={user._id} index={index} user={user} refetch={refetch}></UserRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;