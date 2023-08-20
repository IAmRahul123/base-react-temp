import React, { useEffect, useState } from "react";
import { AppSidebar, AppFooter, AppHeader } from "../common/index";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
    CButton,
    CCard,
    CLink,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'

function UserDetails() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobileNo: "",
        password: ""
    });
    const { id } = useParams();
    // console.log("params ka id", id)
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3000/posts/${id}`);
        console.log("id aaya", id)
        setUser(res.data);
    };
    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <h4 className="text-center">User Details</h4>

                    <form>
                        <div className="row justify-content-center">
                            <div className="col-6 ">
                                <ul className="pl-0 ">
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="font-weight-bold col-6">User ID:</div>
                                            { }
                                            <div className="font-weight-bold col-6">
                                                {id}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="font-weight-bold col-6">Name:</div>
                                            { }
                                            <div className="font-weight-bold col-6">
                                                {user.name}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="font-weight-bold col-6">Email:</div>
                                            <div className="font-weight-bold col-6">
                                                {user.email}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="font-weight-bold col-6">
                                                Mobile Number:
                                            </div>
                                            <div className="font-weight-bold col-6">
                                                {user.mobileNo}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="font-weight-bold col-6">
                                                Create Date:
                                            </div>
                                            <div className="font-weight-bold col-6">
                                                22/02/2022
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="font-weight-bold col-6">
                                                Update Date:
                                            </div>
                                            <div className="font-weight-bold col-6">
                                                03/03/2022
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="font-weight-bold col-6">
                                                Enabled:
                                            </div>
                                            <div className="font-weight-bold col-6">
                                                0
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="row">
                                            <div className="font-weight-bold col-6">Status:</div>
                                            
                                            <div className="font-weight-bold col-6 text-success">
                                                ACTIVE
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>

                    <div className="text-center">
                        <Link to={"/user/userList/"}><CButton type="button" className="btn btn-success">
                            Back
                        </CButton></Link><Link to={`/User/EditUser/` + id}><CButton color="warning ms-2 ">Edit</CButton></Link>
                    </div>
                </div>
                <AppFooter />
            </div>
        </div>
    );
}

export default UserDetails;