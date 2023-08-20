import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../login/LoginPage";
import Register from "../login/Register";
import ForgotPassword from "../login/ForgotPassword";
import Page404 from "../page404/Page404";
import Page500 from "../page500/Page500";
import DefaultLayout from "../layout/DefaultLayout"
import UserList from "../User/UserList";
import Profile from "../User/Profile";
import AddUser from "../User/AddUser";
import EditUser from "../User/EditUser";
import UserDetails from "../User/UserDetail";

export default function RouterComponent() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="/" element={<UserList />} />
          <Route path="/dashboard" element={<UserList />} />
          <Route path="/User/UserList" element={<UserList />} />
          <Route path="/User/Profile" element={<Profile />} />
          <Route path="/User/AddUser" element={<AddUser />} />
          <Route path="/User/EditUser/:id" element={<EditUser />} />
          <Route path="/User/UserDetail/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
