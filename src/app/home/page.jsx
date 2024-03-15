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


    const aoSubmeter = async (e) => {
        e.preventDefault()
        let response;

        try {
            response = await axios.post('https://reqres.in/api/login', formulario)
            router.push('/user')
            console.log(response)
            
        } catch (error) {
            console.log(response)
            alert(error.response.data.error)
            console.log(error.response)

        }

    };

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
                        <input required placeholder="USUÁRIO" type="text" name="email" onChange={aoAlterarValores}></input>
                        <input required placeholder="SENHA" type="password" name="password" onChange={aoAlterarValores}></input>
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