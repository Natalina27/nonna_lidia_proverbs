import React from 'react';
import s from './Card.module.scss';

const Card = ({prov, name}) => {

    return (
        <div className={s.card}>
            <div className={s.cardInner}>
                <div className={s.cardFront}>
                    {prov}
                </div>
                <div className={s.cardBack}>
                    {name}
                </div>
            </div>
        </div>
    );
};

export default Card;
