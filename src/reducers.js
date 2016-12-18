export const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = { ...action.data, ...{ score: 1, id: +new Date() } };
            return state.concat([ newCard ]);
        case 'UPDATE_CARD':
            let cardUpdate = action.data;
            return state.map((card) => (card.id !== cardUpdate.id) ? card : { ...card, ...cardUpdate });
        case 'DELETE_CARD':
            return state.filter((card) => (card.id !== action.data));
        default:
            return state;
    }
}

export const decks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DECK':
            let newDeck = { name: action.data, id: +new Date() };
            return state.concat([ newDeck ]);
        default:
            return state;
    }
}

export const addingDeck = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        default: return state;
    }
}

export const showBack = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_BACK': return action.data || false;
        default: return state;
    }
}