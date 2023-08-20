import React, { useEffect, useState } from "react";
import { AppSidebar, AppFooter, AppHeader } from "../common/index";
import axios from "axios";
import { Link } from 'react-router-dom';
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
function Profile() {
  const tableExample = [
    {
      user: {
        name: "Yiorgos Avraamu",
        new: true,
        registered: "Jan 1, 2021",
        email: "yiorgas@gmail.com",
        mobile: 9332199663,
      },
    },
  ];
  const [profile, setprofile] = useState([]);
  let aa = [];
  useEffect(() => {
    let url = "http://localhost:3000/posts";
    axios
      .get(url)
      .then((resp) => {
        if (resp.status === 200) {
          let demo = resp.data;
          // console.log(demo);
          // aa.push(demo);
          demo.map((item) => {
            aa.push(item.name);
            // console.log(aa);
          });
          setprofile({ aa });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("name", profile);

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <h4 className="text-center">Profile</h4>

          {tableExample.map((item, index) => (
            <form>
              <div className="row justify-content-center">
                <div className="col-6 ">
                  <ul className="pl-0 " key={index}>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="font-weight-bold col-6">Name:</div>
                        {}
                        <div className="font-weight-bold col-6">
                          {item.user.name}
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="font-weight-bold col-6">Email:</div>
                        <div className="font-weight-bold col-6">
                          {item.user.email}
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="font-weight-bold col-6">
                          Mobile Number:
                        </div>
                        <div className="font-weight-bold col-6">
                          {item.user.mobile}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          ))}
          <div className="text-center">
            <Link to='/User/UserList'><CButton type="button" className="btn btn-success">
              Back
            </CButton></Link>
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
}

export default Profile;
