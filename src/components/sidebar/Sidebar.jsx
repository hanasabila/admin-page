import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function Sidebar() {
  return (
    <ChakraProvider>
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Radiate</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/counselors" style={{ textDecoration: "none" }}>
            <li>
              <GroupOutlinedIcon className="icon" />
              <span>Psychologists</span>
            </li>
          </Link>
          
          <Link to="/courses" style={{ textDecoration: "none" }}>
          <li>
            <BookOutlinedIcon className="icon" />
            <span>Courses</span>
          </li>
          </Link>

          <Link to="/faq" style={{ textDecoration: "none" }}></Link>
          <li>
            <QuestionAnswerOutlinedIcon className="icon" />
            <span>FAQ</span>
          </li>
          
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
    </ChakraProvider>
  )
}

export default Sidebar