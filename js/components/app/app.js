import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import {Background} from '../background/background';
import {Store} from '../store/store';
import {Basket} from '../basket/basket';
import {Checkout} from '../checkout/checkout';

import {gamesArr} from '../../info/game-info';

export class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            games: [],
            basket: []
        }

        this.addToBasket = this.addToBasket.bind(this);
        this.removeFromBasket = this.removeFromBasket.bind(this);
    }
    
    componentWillMount() {
        this.setState({ games: gamesArr })
    }

    addToBasket(game) {
        const newBasket = [...this.state.basket];
        newBasket.push(game);
        this.setState({games: this.state.games, basket: newBasket})
    }

    removeFromBasket(game) {
        const newBasket = [...this.state.basket]
            .filter(elem => {
                return elem.id !== game.id
            });
        game.toggleSelected();
        this.setState({ games: this.state.games, basket: newBasket });
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <Background/>
                    <Route exact path="/" render={(props) =>
                        <Store  
                            games={this.state.games}
                            basket={this.state.basket}
                            addToBasket={this.addToBasket}
                            removeFromBasket={this.removeFromBasket}
                            checkoutLink={this.checkoutLink}
                            {...props}
                            />
                        }/>
                    <Route path="/checkout" render={(props) =>
                        <Checkout
                            basket={this.state.basket}
                            removeFromBasket={this.removeFromBasket}
                            {...props}
                        />
                    }/>
                </div>
            </Router>
        )
    }
}
    