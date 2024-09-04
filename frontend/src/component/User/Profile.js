import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MetaData from '../layout/MetaData'
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";
import "./Profile.css"
import { FiEdit3 } from 'react-icons/fi';
const Profile = ({ history }) => {
    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated === false) {
            history.push("/login");
        }
    }, [isAuthenticated, history])


    return (
        <Fragment>
            <MetaData title={`${user.name}'s Profile`} />
            {/* {loading ? (<Loader />) : (
                <Fragment>
                    <div className='profileContainer'>
                        <div>
                            <h1>My Profile</h1>
                            <img src={user.avatar.url} alt={user.name} />
                            <Link to="/me/update">Edit Profile</Link>
                        </div>
                        <div>
                            <div>
                                <h4>Full Name</h4>
                                <p>{user.name}</p>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>{user.email}</p>
                            </div>
                            <div>
                                <h4>Joined On</h4>
                                <p>{String(user.createdAt).substr(0, 10)}</p>
                            </div>
                            <div>
                                <Link to="/orders">my Orders</Link>
                                <Link to="/password/update">Change Password</Link>
                            </div>
                        </div>
                    
                    </div>
                </Fragment>)} */}
            <div className='md:mt-16'>
                <div className="w-[50%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                        <img
                            className="w-full h-60 object-cover"
                            src={user.avatar.url} alt={user.name}
                        />
                        <button className="absolute top-2 right-2 bg-orange-400 text-black rounded-full p-2">
                            <Link to="/me/update"><FiEdit3 /></Link>
                        </button>
                    </div>
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-500 text-sm">Joined On:{String(user.createdAt).substr(0, 10)} </p>
                        <div className="mt-4 flex space-x-4">
                            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
                                <Link to="/orders">my Orders</Link>
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                                <Link to="/password/update">Update Password</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile
