import React, { useEffect, useState } from 'react';
import "./sidebar.css"
import {Link} from "react-router-dom"
import { axiosInstance } from '../../config';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() =>{
    const getCats = async() => {
      const res = await axiosInstance.get("/categories");
      setCats(res.data);
    };
    getCats();
  },[]);
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="img" />
          <p>Web Developer</p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATERGORIES</span>
          <ul className="sidebarList">
            {cats.map((c)=>(
              <Link to={`/?cat=${c.name}`}  className="link">
              <li className='sidebarListItem'>{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <a href="https://www.facebook.com/giangpham2k2"><i className="sidebarIcon fa-brands fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/pt.giang02/"><i className="sidebarIcon fa-brands fa-instagram-square"></i></a>
            <a href="https://github.com/Giang02"><i className="sidebarIcon fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
    </>
  )
}
