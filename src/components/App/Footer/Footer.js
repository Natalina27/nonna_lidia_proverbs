import React from 'react';
import s from './Footer.module.css';
import CuorePng from '../../../assets/cuore.png';

function Footer() {
    return (
        <footer className={s.footer}>
           Created by Sophie Cecala with
            <img src={CuorePng} alt="cuore"/>
        </footer>
    );
}

export default Footer;