import React, { useState } from 'react';
import './Sidebar.css'
import {
    FaBars,
    FaUserAlt,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<i class="fa-solid fa-house"></i>
        },
        {
            path:"/about",
            name:"About ",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Projects",
            icon:<i class="fa-solid fa-briefcase"></i>
        },
        {
            path:"/comment",
            name:"Skills",
            icon:<i class="fa-solid fa-gear"></i>
        },
        {
            path:"/product",
            name:"Contact",
            icon:<i class="fa-solid fa-address-book"></i>
        }

    ]
    return (
        <div className='header'>
        <div className="container">
            
           
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Siwe</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                       
                   </div>
               </div>

               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }

<div className="sidebar-item">
        <NavLink to="/productList" className="sidebar-link">
            <i class="fa-brands fa-discord"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-x-twitter"></i>
            
        </NavLink>
    </div>

<div className="sidebar-icons">
        <NavLink to="/productList" className="sidebar-link">
            
        </NavLink>
    </div>
           </div>
           <main>{children}</main>
           </div>

           </div>
       
    );
};

export default Sidebar;