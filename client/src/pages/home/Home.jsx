import React, { useEffect, useState } from "react"
import "./home.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header"
import {axiosInstance} from "../../config"
import Posts from "../../components/posts/Posts"
import { useLocation } from "react-router-dom"

export default function Home(){
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async()=>{
           const res = await axiosInstance.get("/posts"+search);
           setPosts(res.data)
        };
        fetchPosts();
    },[search]);
    return(
    <>
        <Header />
        <div className="home">
        <Posts posts={posts} />
        <Sidebar />
        </div>
    </>
    )
}