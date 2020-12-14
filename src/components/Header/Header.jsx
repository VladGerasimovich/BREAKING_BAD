import React from 'react';
import s from './Header.module.css';
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" className={s.image}/>
        </header>
    )
}

export default Header;