import React, { useEffect, useState} from 'react';
import { axiosInstance } from '../../config';
import "./tableinfo.css";

export default function TableInfo() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async()=>
    {
      const res = await axiosInstance.get("/users");
      setUsers(res.data);
    };
    getUsers();
  },[]);
    return (
    <div className="tableinfo">
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
        </tr>
        </thead>
        <tbody>
          {users.map((u) =>(
        <tr>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.password}</td>
            <td>{u.address}</td>
        </tr>
          ))}
        </tbody>
    </table>
</div>
)}