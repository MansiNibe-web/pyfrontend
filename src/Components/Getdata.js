import React, { useState, useEffect } from "react";
import axios from "axios";  
import '../App.css';  

function Getdata() {

    const [user, setUser] = useState([]);  

    useEffect(() => {
        // Fetch data with axios
        axios.get("http://127.0.0.1:8080/get_all_sports")  
          .then(response => {
            setUser(response.data);
            console.log(response.data);
            
          })
          .catch(error => {
            console.log(error);
          });
    
      }, []);

    return (
        <>
          <div className="sports-container">
            <h1>Sports List</h1>
            <table className="sports-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Game Type</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {user.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                    <td>{post.location}</td>
                    <td>{post.gametype}</td> 
                    <td>{post.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );

}

export default Getdata;
