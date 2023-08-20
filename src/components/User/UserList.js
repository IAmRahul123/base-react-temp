import React, { useEffect, useState } from 'react';
// import data from './data.json'
import { AppSidebar, AppFooter, AppHeader } from '../common/index'
import { Link } from 'react-router-dom';
import Axios from "axios"
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

function UserList() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobileNo, setMobileNo] = useState()
    const [status, setStatus] = useState()
    const [enabled, setEnabled] = useState()
    const [dataArr, setDataArr] = useState([]);

    // const data = [
    //     {
    //         id: "1",
    //         name: "Aditya",
    //         email: "aditya_ranjan@gmail.com",
    //         mobileNo: "8093926227",
    //         status: "Active",
    //         enabled: "enabled"
    //     },
    //     {
    //         id: "2",
    //         name: "rahul",
    //         email: "aditya_ranjan@gmail.com",
    //         mobileNo: "8093926227",
    //         status: "Active",
    //         enabled: "enabled"
    //     },
    //     {
    //         id: "3",
    //         name: "shadow",
    //         email: "aditya_ranjan@gmail.com",
    //         mobileNo: "8093926227",
    //         status: "Active",
    //         enabled: "enabled"
    //     }

    // ]

    async function getData() {
        const res = await Axios.get(`http://localhost:3000/posts`)

            .then(

                (resp) => {

                    if (resp.status === 200) {
                        let datas = resp.data
                        console.log("hii", datas)

                        // console.log(JSON.stringify(resp));
                        datas.map((item) => {
                            setDataArr(datas)
                        })
                        console.log("hell", dataArr)
                    }

                })
            .catch((error) => {
                console.log("lists " + (error)
                );

            })
    }

    useEffect(() => {
        getData();

    }, [])




    return (


        <>

            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <h4 className="body flex-grow-1 px-3" >User List
                        <Link to='/user/addUser/'><CButton style={{alignItems:"right"}} color="warning ms-2 "> Add User</CButton></Link></h4>
                    <CCard className="mb-4">
                        <CTable align="middle" className="mb-0 border" hover responsive>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell >#</CTableHeaderCell>
                                    <CTableHeaderCell >name</CTableHeaderCell>
                                    <CTableHeaderCell >email</CTableHeaderCell>
                                    <CTableHeaderCell >mobileNo</CTableHeaderCell>
                                    <CTableHeaderCell >status</CTableHeaderCell>
                                    <CTableHeaderCell >enabled</CTableHeaderCell>
                                    <CTableHeaderCell >Actions</CTableHeaderCell>

                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {

                                    dataArr.map((e, index) => {

                                        return (

                                            <CTableRow key={index}>
                                                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                                <CTableDataCell>{e.name}</CTableDataCell>
                                                <CTableDataCell>{e.email}</CTableDataCell>
                                                <CTableDataCell>{e.mobileNo}</CTableDataCell>
                                                <CTableDataCell><span className='text-success'>ACTIVE</span></CTableDataCell>
                                                <CTableDataCell>0</CTableDataCell>
                                                <CTableDataCell><Link to={`/user/userDetail/` + e.id}><CButton color="primary ms-2 ">View</CButton></Link><Link to={`/User/EditUser/` + e.id}><CButton color="warning ms-2 ">Edit</CButton></Link></CTableDataCell>
                                            </CTableRow>

                                        )
                                    })
                                }


                            </CTableBody>
                        </CTable>

                    </CCard>
                    <center>
                        <Link to='/dashboard'> <CButton color="danger" variant="ghost">Back</CButton></Link>
                    </center>

                </div>
                <AppFooter />
            </div>
        </>

    )
}

export default UserList
