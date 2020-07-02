import React from 'react';
import s from './HeaderBlock.module.scss';
import {ReactComponent as ReactLogoSVg} from '../../../assets/logo.svg';

console.log('###ReactLogoSVg: ', ReactLogoSVg);

const HeaderBlock = ({title, desc, hideBackground = false, children}) => {

    const styleCover = hideBackground ? { background: 'none'} : {};
    return (
        <div className={s.cover} style={styleCover}>
            <div className={s.wrap}>
                {/*<h1 className={s.header}>{title}</h1>*/}
                {/*<p className={s.description}>{desc}</p>*/}
                {title && <h1 className={s.header}>{title}</h1>}
                {desc && <p className={s.description}>{desc}</p>}
                {children}
            </div>
        </div>

    );
}

export default HeaderBlock;
