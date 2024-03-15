"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

const UserList = () => {
  const [listuser, setListUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response =  await axios.get(
          "https://reqres.in/api/users?page=1&per_page=5"
        );
        setListUser(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        alert(error.response.data.error);
        console.log(error.response);
      }
    };

    getUsers();
  }, []);

  return (
    <main>
      <h1>Lista de Usuários</h1>
      <ul>
        {listuser.map((user) => ( 
          <li key={user.id}>
            <li>
                {user.id} 
                {user.first_name}
                {user.last_name}
                {user.email}

            </li>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UserList;
