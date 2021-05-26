import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import "../Css/Header.css"
import StayPrimaryPortraitIcon from '@material-ui/icons/StayPrimaryPortrait';
import PhonelinkEraseIcon from '@material-ui/icons/PhonelinkErase';
function Header() {
    return (
        <div className="Header">
         <div className="Logo">       
         <p>LOGO</p>   
         </div>
        <div className="tabs">
         <Link to="/" className="rou"><p>Dashboard</p></Link>   
         <Link to="/Employees"className="rou"><p>Employees</p></Link>
         <Link to="/Appointments"className="rou"><p>Appointments</p></Link>
         <Link to="/Calender"className="rou"><p>Calender</p></Link>
         <Link to="/Messages"className="rou"><p>Messages</p></Link>
        </div>
        <div className="sider">
         <button>Make An Appointment</button>
         <div className="icons">
             <span><PhonelinkEraseIcon className="phone"/></span>
             <span><PhonelinkEraseIcon className="phone"/></span>
             <div className="ava">
             <Avatar  alt="U" src="/static/images/avatar/1.jpg" />
             <StayPrimaryPortraitIcon className="phones"/>
             </div>
         </div>
        </div>
        </div>
    )
}

export default Header
