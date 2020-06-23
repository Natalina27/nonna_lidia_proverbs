import React from 'react';
import s from './Header.module.scss';
import { ReactComponent as ReactLogoSVg } from '../../../assets/logo.svg';
console.log('###ReactLogoSVg: ', ReactLogoSVg);


function Header() {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                <h1 className={s.header}>PROVERBI DI NONNA LIDIA</h1>
                    <p className={s.description}>
                        I proverbi della mia nonna in dialetto di San Gregorio
                    </p>



            </div>
        </div>

    );
}

export default Header;