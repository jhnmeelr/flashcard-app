(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        "div",
        { className: "app" },
        props.children
    );
};

var Sidebar = function (_React$Component) {
    _inherits(Sidebar, _React$Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
    }

    _createClass(Sidebar, [{
        key: "render",
        value: function render() {
            var props = this.props;
            return React.createElement(
                "div",
                { className: "sidebar" },
                React.createElement(
                    "h2",
                    null,
                    "All Decks"
                ),
                React.createElement(
                    "ul",
                    null,
                    props.decks.map(function (deck, i) {
                        return React.createElement(
                            "li",
                            { key: i },
                            deck.name
                        );
                    })
                ),
                props.addingDeck && React.createElement("input", { ref: "add" })
            );
        }
    }]);

    return Sidebar;
}(React.Component);

ReactDOM.render(React.createElement(
    App,
    null,
    React.createElement(Sidebar, { decks: [{ name: "Deck 1" }], addingDeck: true })
), document.getElementById('root'));

},{}]},{},[1]);
