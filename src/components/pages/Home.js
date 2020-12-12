import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Home = () => {
    //set json-server data to user
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, [])
    //load all data from json-server
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3008/users");
        setUser(result.data.reverse());
        console.log(result);
    }
    //delete specific id holder item
    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3008/users/${id}`);

         //after delete load others data totable
        loadUsers();
    }
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
                <hr />
                <table className="table border shadow">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           users.map((user, index) => (
                               <tr>
                                   <th scope="row">{index + 1}</th>
                                   <td >{user.name}</td>
                                   <td >{user.username}</td>
                                   <td >{user.email}</td>
                                   <td>
                                       <Link className="btn btn-primary mr-2" to={`/users/view/${user.id}`}>Read</Link>
                                       <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                       <Link  className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                   </td>
                                  
                               </tr>
                           ))
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};
export default Home;