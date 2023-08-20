import React, { useState, useEffect } from 'react';
import './AddUser.css';
import { AppHeaderDropdown } from '../common';
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../common/index'

const EditUser = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    console.log("id", id)
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobileNo: "",
        password: ""
    });

    const { name, email, mobileNo, password } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/posts/${id}`, user);
        navigate('/user/userList')
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/posts/${id}`);
        setUser(result.data);
    };

    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />

                <div className='login' >
                    <form className='login_form' onSubmit={e => onSubmit(e)} >
                        <h1>Edit User 👤</h1>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />

                        <input type='email'
                            placeholder='Email'
                            name='email'
                            value={email}
                            readOnly={true}
                            style={{
                                backgroundColor: "#E1E7EC",
                            }}
                            onChange={e => onInputChange(e)}>

                        </input>

                        <input type='number'
                            placeholder='Mobile number'
                            name='mobileNo'
                            value={mobileNo}
                            onChange={e => onInputChange(e)}>
                        </input>

                        <button type='submit' className='submit_btn'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUser