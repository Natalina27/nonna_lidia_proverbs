import React from 'react';
import s from './Card.module.scss';

class Card extends React.Component {

    state = {
        done: false
    };

    handleCardClick = () => {
        this.setState({
            done: !this.state.done
        })
    };

    render() {
        const cardClass = [s.card];
        const { done } = this.state;
        const {prov, name} = this.props;

        if (done) {
            cardClass.push(s.done);
        }
        return (
            <div className={cardClass.join(' ')}
                 onClick={this.handleCardClick}
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        {prov}
                        {/*, { count }*/}
                    </div>
                    <div className={s.cardBack}>
                        {name}
                    </div>
                </div>
            </div>
        );
    };
}

export default Card;
