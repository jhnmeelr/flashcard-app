import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class CardModal extends Component {
    componentDidUpdate() {
        this.refs.front.focus();
    }
    onSave = () => {
        let front = this.refs.front;
        let back = this.refs.back;
        this.props.onSave({
            ...this.props.card,
            ...{ front: front.value, back: back.value }
        });
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }
    onDelete = () => {
        this.props.onDelete(this.props.card.id);
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }
    render() {
        let { card, onDelete } = this.props;
        return (
            <div className="modal">
                <h1>{ onDelete ? 'Edit' : 'New' } Card</h1>
                <label>Card Front:</label>
                <textarea ref="front" defaultValue={card.front}></textarea>
                <label>Card Back:</label>
                <textarea ref="back" defaultValue={card.back}></textarea>
                <p>
                    <button onClick={this.onSave}>Save Card</button>
                    <Link to={`/deck/${card.deckId}`} className="btn">Cancel</Link>
                    {
                        onDelete ? <button onClick={this.onDelete}>Delete Card</button> : null
                    }
                </p>
            </div>
        );
    }
}

export default CardModal;