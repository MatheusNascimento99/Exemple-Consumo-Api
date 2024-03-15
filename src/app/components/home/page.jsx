"use client"
import React, { useState } from "react";
import style from "./style.css";
import Image from 'next/image';
import lg from '../../../assets/lg.png';


const LoginPage = () => {
    const [formulario, setFormulario] = useState({
        email: '',
        password: ''
    })


    const aoSubmeter = (e) => {
        e.preventDefault()
        console.log('submeteu', formulario);
    }

    const aoAlterarValores = (e) => {
        const { name, value } = e.target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return (
        <main className="HomeFull">
            <div className="LeftSide">
                <h1>Simplificamos juntos</h1>
                <p>Supply Chain | Industrial | Systems</p>
            </div>


            <div className="RightSide">
                <div className="HomeImg">
                    <Image className="logo" src={lg} alt="Logo" />
                </div>
                <p>LOGIN</p>
                <form onSubmit={aoSubmeter}>
                    <div className="HomeInput">
                        <input placeholder="USUÁRIO" type="text" name="email" onChange={aoAlterarValores}></input>
                        <input placeholder="SENHA" type="password" name="password" onChange={aoAlterarValores}></input>
                    </div>
                    <button type="submit" className="HomeBtn">LOGAR</button>
                </form>


                <div className="RecPassword">
                    <p>ESQUECI MINHA SENHA</p>
                    <p>CADASTRE-SE</p>
                </div>
            </div>
        </main>
    )
}


export default LoginPage;