import React, { useContext } from "react"
import "./topbar.css"
import { Link } from "react-router-dom";
import {Context} from "../../context/Context"

export default function TopBar(){
    const {user, dispatch}= useContext(Context);
    const PF = "https://giang-blog-test.herokuapp.com/images/";

    const handleLogout = ()=>{
        dispatch({
            type: "LOGOUT"
        });
    };
    return(
        <div className="top">
            <div className="topLeft">
                <a href="https://www.facebook.com/giangpham2k2"><i className="topIcon fa-brands fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/pt.giang02/"><i className="topIcon fa-brands fa-instagram-square"></i></a>
                <a href="https://github.com/Giang02"><i class="topIcon fa-brands fa-github"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link> 
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            ABOUT
                        </Link> 
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/TableInfo">
                            CONTACT
                        </Link> 
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                <Link className="link" to="/settings">
                    <img 
                    className="topImg" 
                    src={PF+user.profilePic}
                    alt="">
                    </img>
                </Link>
                ) : (
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/login">
                        LOGIN
                    </Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">
                        REGISTER
                    </Link>
                    </li>
                </ul>      
            )}
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}