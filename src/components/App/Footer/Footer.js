import React from 'react';
import s from './Footer.module.scss';
import CuorePng from '../../../assets/cuore.png';
import {ReactComponent as ReactLogoSVg} from "../../../assets/logo.svg";

function Footer() {
    return (
        <footer className={s.footer}>
            <ReactLogoSVg className={s.logoReact} />
            Created by Sophie Cecala with
            <img src={CuorePng} alt="cuore"/>
        </footer>
    );
}

export default Footer;