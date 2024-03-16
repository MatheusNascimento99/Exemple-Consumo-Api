'use client'
import Image from 'next/image';
import Link from 'next/link';
import style from './style.css'
import UserList from "./userList";
import Menu from '../../assets/menu.png';
import Bell from '../../assets/bell.png';
import Profile from '../../assets/profile.png';
import RArrow from '../../assets/right-arrow.png';
import { useState } from 'react';

const UserPage = () => {
    return (
        <main className='UserPageFull'>
            <div className='UserPageBar'>
                <div className='UserPageTxt'>
                     <Link href={''}><Image className='MenuEmBarra' src={Menu} alt='Icone menu em barra' /></Link>
                </div>

                <div className='UserPageIcon'>
                    <Link href={''}><Image className='Bell' src={Bell} alt='Icone sino' /></Link>
                    <Link href={''}><Image className='Profile' src={Profile} alt='Icone Profile' /></Link>
                </div>

            </div>
            <div className='MenuUserList'>
                <div className='UserSideBar'>
                    <p>USUÁRIOS</p> <Link href={''}><Image className='RArrow' src={RArrow} alt='Icone RArrow' /></Link>
                </div>
                <div className='UserList'>
                <UserList></UserList>
                </div>

            </div>
        </main>
    )

}

export default UserPage;