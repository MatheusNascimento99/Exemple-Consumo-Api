"use client";
import Image from "next/image";
import userListCss from "./userListCss.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Pencil from "../../assets/pencil.png";
import ModalUser from "../components/modal/modal.jsx";

const UserList = () => {
  const [listuser, setListUser] = useState([]);
  const [total, setTotal] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [page, setPage] = useState(null);

  //!GET rota usuários

  const GetUsers = async () => {
    try {
      const response = await axios.get(
        `https://reqres.in/api/users?pages=1&per_page=5`
      );
      setListUser(response.data.data);
      setTotal(response.data.total);
      setPage(response.data.page);
      console.log(response.data.data);
    } catch (error) {
      alert(error.response.data.error);
      console.log(error.response);
    }
  };

  useEffect(() => {
    GetUsers();
  }, []);

  const OpenModal = (userId) => {
    setUserId(userId);
    setModalOpen(true);
  };

  const CloseModal = () => {
    setModalOpen(false);
    GetUsers();
  };

  return (
    <main className="UserListFull">
      <div className="TableBar">
        <h4>USUÁRIOS</h4> <button>NOVO</button>
      </div>
      {/* TABELA USERS */}
      <table className="TableUserList">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>PRIMEIRO NOME</th>
            <th>ÚLTIMO NOME</th>
            <th>E-MAIL</th>
            <th>FOTO</th>
          </tr>
        </thead>
        <tbody>
          {listuser.map((user) => (
            <tr key={user.id}>
              <td>
                <button className="btnEdit">
                  <Image
                    onClick={() => OpenModal(user.id)}
                    className="Pencil"
                    src={Pencil}
                    alt="Imagem caneta"
                  />
                </button>
              </td>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                {" "}
                <Image
                  src={user.avatar}
                  width={50}
                  height={50}
                  alt="Foto avatar usuário"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="TableFooter">
        {page}-{listuser.length} de {total}
      </div>
      {modalOpen && <ModalUser onClose={CloseModal} userId={userId} />}
    </main>
  );
};

export default UserList;
