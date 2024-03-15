import React from "react";
import style from "./style.css";
import Image from 'next/image';
import lg from '../../../assets/lg.png';

const LoginPage = () => {
    const aoSubmeter = (e) => {
        e.preventDefault()
        console.log('submeteu');
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
                <div className="HomeInput">
                    <input placeholder="USUÁRIO"></input>
                    <input placeholder="SENHA"></input>
                </div>

                <button className="HomeBtn">LOGAR</button>

                <div className="RecPassword">
                    <p>ESQUECI MINHA SENHA</p>
                    <p>CADASTRE-SE</p>
                </div>
            </div>
        </main>
    )
}


export default LoginPage;