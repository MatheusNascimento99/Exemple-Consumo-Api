import style from './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ModalUser({ mostrar, onClose, setBtn, btn }) {
    const [dataUser, setDataUser] = useState(null);

    const getUserId = async () => {
        try {
            const response = await axios.get("https://reqres.in/api/users/1");
            setDataUser(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            /* alert(error.response.data.error);
            console.log(error.response.data.error); */
        }
    };

    useEffect(() =>{
        if(btn){
            getUserId();
        }
    }, [setBtn]);

    const closeModal = () =>{
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
        <main style={estiloModal}>
            <div style={estiloConteudo}>
                {dataUser && (
                    <div>
                        <p>ID: {dataUser.id}</p>
                        <p>Nome: {dataUser.first_name} {dataUser.last_name}</p>
                        <p>E-mail: {dataUser.email}</p>
                    </div>
                )}
                <button onClick={closeModal} >CANCELAR</button>
            </div>
        </main>
    )
}

export default ModalUser;