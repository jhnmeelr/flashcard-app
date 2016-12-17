import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { addDeck, showAddDeck, hideAddDeck } from '../actions';

const mapStateToProps = ({ decks, addingDeck }) => ({
    decks,
    addingDeck
});

const mapDispatchToProps = (dispatch) => ({
    addDeck: name => dispatch(addDeck(name)),
    showAddDeck: name => dispatch(showAddDeck()),
    hideAddDeck: name => dispatch(hideAddDeck())
});

class Sidebar extends Component {
    componentDidUpdate() {
        let element = this.refs.add;
        if (element) element.focus();
    }
    createDeck = (e) => {
        if (e.which !== 13) return;
        let name = this.refs.add.value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }
    render() {
        let props = this.props;
        return (
            <div className="sidebar">
                <h2>All Decks</h2>
                <button onClick={e => this.props.showAddDeck()}>New Deck</button>
                <ul>
                    {props.decks.map((deck, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/deck/${deck.id}`}>
                                    {deck.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {props.addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);