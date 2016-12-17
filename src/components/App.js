import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

const mapStateToProps = (props, { params: { deckId } }) => ({
    deckId
});

const App = ({ deckId, children }) => {
    return (
        <div className="app">
            <Sidebar />
            <h1>Deck: {deckId}</h1>
            {children}
        </div>
    );
}

export default connect(mapStateToProps)(App);