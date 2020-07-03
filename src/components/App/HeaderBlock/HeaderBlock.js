import React from 'react';
import s from './HeaderBlock.module.scss';
import {ReactComponent as ReactLogoSVg} from '../../../assets/logo.svg';

console.log('###ReactLogoSVg: ', ReactLogoSVg);

const HeaderBlock = ({hideBackground = false, children}) => {

    const styleCover = hideBackground ? { background: 'none'} : {};
    return (
        <div className={s.cover} style={styleCover}>
            <div className={s.wrap}>
                {children}
            </div>
        </div>

    );
}

export default HeaderBlock;
