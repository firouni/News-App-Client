import React, { useEffect } from 'react';
import Header from './Header';
import AdminCompo from './Admin/AdminCompo';
import UserCompo from './User/UserCompo';
import { useNavigate } from 'react-router-dom';
//partie redux
import fetchAccount from '../api/auth'
import { useDispatch, useSelector } from 'react-redux';

const PrivateRoute = () => {
    const auth = useSelector(state => state.authuser);
    const navigate = useNavigate();

    const getAuth = async () => {
        const data = await fetchAccount()
            console.log(data,'data account')
    }
    useEffect(() => {
        getAuth()
    },[])
    return (
        <div>
            <Header />
            {
                auth.role === "admin" ? <AdminCompo /> : <UserCompo />
            }
        </div>
    );
}

export default PrivateRoute