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

const App = (props) => {
    return (
        <div className="app">
            {props.children}
        </div>
    );
}

ReactDOM.render(<App>Hello React</App>, document.getElementById('root'));