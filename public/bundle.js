(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var cards = function cards() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_CARD':
            var newCard = _extends({}, action.data, { score: 1, id: +new Date() });
            return state.concat([newCard]);
        default:
            return state;
    }
};

var store = Redux.createStore(Redux.combineReducers({
    cards: cards
}));

var App = function App(props) {
    return React.createElement(
        'div',
        { className: 'app' },
        props.children
    );
};

ReactDOM.render(React.createElement(
    App,
    null,
    'Hello React'
), document.getElementById('root'));

},{}]},{},[1]);
