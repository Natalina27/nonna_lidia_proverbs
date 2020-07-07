import React from 'react';
import s from './Card.module.scss';

class Card extends React.Component  {

    // let count = 1;
    // setInterval(() => {
    //         count++;
    //         console.log('#count', count);
    //     }, 1000);
    //
render() {
    const { prov, name } = this.props;
    return (
            <div className={s.card}>
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { prov }
                        {/*, { count }*/}
                    </div>
                    <div className={s.cardBack}>
                        { name }
                    </div>
                </div>
            </div>
    );
};
}

export default Card;
