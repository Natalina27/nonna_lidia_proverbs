import React from 'react';
import s from './Header.module.scss';
import logo from "../../../logo.svg";

function Header() {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <h1 className={s.header}>PROVERBI DI NONNA LIDIA</h1>
                <img src={logo} className={s.logoReact} alt="logo" />
                    <p className={s.description}> I proverbi della mia nonna in dialetto di San Gregorio</p>


            </div>
        </div>

    );
}

export default Header;