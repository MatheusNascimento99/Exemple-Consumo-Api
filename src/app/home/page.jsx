"use client"
import axios from "axios";
import style from "./style.css";
import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image';
import lg from '../../assets/lg.png';
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [formulario, setFormulario] = useState({
        email: '',
        password: ''
    })

    //!POST - Login
    const AoSubmeter = async (e) => {
        e.preventDefault()
        let response;

        try {
            response = await axios.post('https://reqres.in/api/login', formulario)
            router.push('/user')
            alert('Login realizado com sucesso!');
            console.log(response.status)
        } catch (error) {
            alert('Usuário ou senha inválido!');
            console.log(error.response)
        }
    };

    const AoAlterarValores = (e) => {
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
                <form onSubmit={AoSubmeter}>
                    <div className="HomeInput">
                        <input autoComplete="email" required placeholder="USUÁRIO" type="text" name="email" onChange={AoAlterarValores}></input>
                        <input autoComplete="current-password" required placeholder="SENHA" type="password" name="password" onChange={AoAlterarValores}></input>
                    </div>
                    <button type="submit" className="HomeBtn">LOGAR</button>
                </form>
                <div className="RecPassword">
                    <Link className="LinksHome" href={''}><p>ESQUECI MINHA SENHA</p></Link>
                    <Link className="LinksHome" href={''}><p>CADASTRE-SE</p></Link>
                </div>
            </div>
        </main>
    )
}

export default LoginPage;