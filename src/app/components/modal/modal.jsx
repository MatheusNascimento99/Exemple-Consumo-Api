import style from './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ModalUser({ onClose, userId }) {
    const [dataUser, setDataUser] = useState(null);

    //!GET(ID)buscar usuário pelo id
    const GetUserId = async (id) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setDataUser(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            alert(error.response.data.error);
            console.log(error.response.data.error);
        }
    };


    //!PUT - atualizar usuário pelo id
    const UpdateUserId = async (id) => {
        const validation = confirm('Tem certeza que deseja atualizar as informações deste usuário?')
        if (validation === true) {
            try {
                const response = await axios.put(`https://reqres.in/api/users/${id}`);
                alert('Usuário atualizado com sucesso!');
                CloseModal();
                console.log(response.data);
                /* Exemplo de função assíncrona de edição dos usuários:
                async function editUser(user id){
                    const body = {
                        name:String(user.email)
                        name:String(user.first_name)
                        name:String(user.last_name)
                        name:String(user.avatar)
                    }
                }
                */
            } catch (error) {
                alert('Erro ao salvar alterações, tente novamente.');
                console.log(error.response.data.error);
            }
        }
    };

    //!DELET - excluir usuário pelo id
    const DeletUserId = async (id) => {
        let validation = confirm('Tem certeza que deseja excluir este usuário?')
        if (validation === true) {
            try {
                const response = await axios.delete(`https://reqres.in/api/users/${id}`);
                alert('Usuário excluido com sucesso!');
                CloseModal();
                console.log(response.status);
            } catch (error) {
                alert('Erro ao excluir usuário, tente novamente.');
                console.log(error.response.data.error);
            }
        }

    };

    useEffect(() => {
        if (userId) {
            GetUserId(userId);
        }
    }, [userId]);

    const CloseModal = () => {
        onClose();
    }

    return (
        <main className='ModalContainer'>
            <div className='Modal'>
                <h4>EDITAR USUÁRIOS</h4>
                {dataUser && (
                    <div className='ModalView'>

                        <div className="SideLeft">
                            <div className='ModalLabel'>
                                <label htmlFor="id">Id</label>
                                <p>{dataUser.id}</p>
                            </div>
                            <div className='ModalLabel'>
                                <label htmlFor="first_name">Nome</label>
                                <p>{dataUser.first_name}</p>
                            </div>
                            <div className='ModalLabel'>
                                <label htmlFor="last_name">Sobrenome</label>
                                <p>{dataUser.last_name}</p>
                            </div>
                        </div>
                        <div className="SideRight">
                            <div className='ModalLabel'>
                                <label htmlFor="Email">Email</label>
                                <p>{dataUser.email}</p>
                            </div>
                            <div className='ModalLabel'>
                                <label htmlFor="Foto">Foto</label>
                                <p>{dataUser.avatar}</p>
                            </div>
                            <div className='ModalLabel'>
                                <label htmlFor="OutrosCampos">OutrosCampos</label>
                                <p>{'outros campos'}</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className='btnModal'>
                    <div className='btnModalOne'>
                        <button onClick={DeletUserId} >EXCLUIR</button>
                    </div>
                    <div className='btnModalTwu'>
                        <button onClick={CloseModal} >CANCELAR</button>
                        <button onClick={UpdateUserId} >SALVAR</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ModalUser;