import style from './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ModalUser({ mostrar, onClose, setBtn, btn, userId }) {
    const [dataUser, setDataUser] = useState(null);

    //!GET(ID)a usuário pelo id
    const getUserId = async (id) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setDataUser(response.data);
            console.log(response.data);

            setDataUser(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            /* alert(error.response.data.error);
            console.log(error.response.data.error); */
        }
    };


    //!PUT - atualizar usuário pelo id
    const updateUserId = async (id) => {

        /* exemplo hopotético
        const [user, setUser] = useState([]);
        async function getUserEdit() {
            const { data } = await getUserId.getUserEdit(userId)
        }
        setUser(data.response) */
        try {
            const response = await axios.put(`https://reqres.in/api/users/${id}`);
            alert(`Usuário atualizado com sucesso! status ${response.status}`);
            closeModal();
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
            if(condição de atualização sobre os campos){
                await userService(classe para conecção com backend).updateUser(id)
            }
            */
        } catch (error) {
            //console.lpg(error.response.data.error)
        }
    }

    //!DELET - excluir usuário pelo id
    const deletUserId = async (id) => {
        /* exemplo hopotético
        async function deleteUser() {
            const { data } = await getUserId.deleteUser(userId)
            try{
                let validation = confirm(`Tem certeza que deseja excluir o usuário ${}?`)
                if(validation){
                    await userService(classe para conecção com backend).deleteUser(id)
                }
            }
        } */
        try {

            const response = await axios.delete(`https://reqres.in/api/users/${id}`);
            alert(`Usuário excluído com sucesso! status ${response.status}`);
            console.log(response.status);
            closeModal();
        } catch (error) {
            //console.lpg(error.response.data.error)
        }
    }


    useEffect(() => {
        if (userId) {
            getUserId(userId);
        }
    }, [btn, userId]);



    const closeModal = () => {
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
                        <button onClick={deletUserId} >EXCLUIR</button>
                    </div>
                    <div className='btnModalTwu'>
                        <button onClick={closeModal} >CANCELAR</button>
                        <button onClick={updateUserId} >SALVAR</button>
                    </div>
                </div>



            </div>
        </main>
    )
}

export default ModalUser;