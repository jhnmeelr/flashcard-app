const cards = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = { ...action.data, ...{ score: 1, id: +new Date() } };
            return state.concat([ newCard ]);
        default:
            return state;
    }
}

const store = Redux.createStore(Redux.combineReducers({
    cards
}));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'ADD_CARD',
    data: {
        front: 'front',
        back: 'back'
    }
});

store.dispatch({
    type: 'ADD_CARD',
    data: {}
});