import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const mapStateToProps = ({ cards }, { params: { deckId } }) => ({
    cards: cards.filter((card) => card.deckId === deckId)
})

const Cards = ({ cards, children }) => {
    return (
        <div className="main">
            {
                cards.map((card) => {
                    return <Card card={card} key={card.id} />
                })
            }
            {children}
        </div>
    );
}

export default connect(mapStateToProps)(Cards);