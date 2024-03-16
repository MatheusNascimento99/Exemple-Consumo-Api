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

        /* exemplo hoporético
        const [user, setUser] = useState([]);
        async function getUserEdit() {
            const { data } = await getUserId.getUserEdit(userId)
        }
        setUser(data.response) */
        try{
            const response = await axios.put(`https://reqres.in/api/users/${id}`);
        alert('Usuário atualizado com sucesso com sucesso!');
        console.log(response.data);

        /* Exemplo de função assíncrona de edição dos usuários:
        async function editUser(){
            const body = {
                name:String(user.email)
                name:String(user.first_name)
                name:String(user.last_name)
                name:String(user.avatar)
            }
        }
        */
        }catch(error){
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

const estiloModal = {
    display: mostrar ? 'block' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: '50px'
};

const estiloConteudo = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '758px',
    height: '436px',
};

return (
    <main className='ModalContainer'>
        <div className='Modal'>
            {dataUser && (
                <div>
                    <p>Id: {dataUser.id}</p>
                    <p>Nome: {dataUser.first_name}</p>
                    <p>Sobrenomee:{dataUser.last_name}</p>
                    <p>E-mail: {dataUser.email}</p>
                </div>
            )}
            <button onClick={closeModal} >CANCELAR</button>
            <button onClick={updateUserId} >SALVAR</button>
            
        </div>
    </main>
)
}

export default ModalUser;