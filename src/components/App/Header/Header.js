import React from 'react';
import s from './Header.module.css';
import logo from "../../../logo.svg";

function Header() {
    return (
            <header className={s.header}>
                <h1>PROVERBI DI NONNA LIDIA</h1>
                <img src={logo} className={s.logoReact} alt="logo" />
            </header>
    );
}

export default Header;