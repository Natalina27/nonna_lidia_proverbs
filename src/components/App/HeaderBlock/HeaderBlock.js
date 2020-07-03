import React from 'react';
import s from './HeaderBlock.module.scss';
import {ReactComponent as ReactLogoSVg} from '../../../assets/logo.svg';

console.log('###ReactLogoSVg: ', ReactLogoSVg);

const HeaderBlock = ({hideBackground = false, children, centerWrap = false }) => {

    const styleCover = hideBackground ? { background: 'none'} : {};
    const styleWrap = centerWrap ? {
        display: 'flex',
        justifyContent: 'center',
    } : {};
    return (
        <div className={s.cover} style={styleCover} >
            <div className={s.wrap} style={styleWrap}>
                {children}
            </div>
        </div>

    );
}

export default HeaderBlock;
