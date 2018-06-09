import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import {Store} from '../store/store';
import {Basket} from '../store/basket';
import {Checkout} from '../checkout/checkout';

import telephone from '../../../assets/telephone.png';
import flag from '../../../assets/flag.png';
import logo from '../../../assets/logo.png';
import background from '../../../assets/background.jpg';

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
        this.setState({games: this.state.games, basket: newBasket}, ()=>{console.log(this.state)})
    }

    removeFromBasket(game) {
        console.log([...this.state.basket])
        const newBasket = [...this.state.basket]
            .filter(elem => {
                console.log(elem);
                console.log(elem.id !== game.id)
                return elem.id !== game.id
            });
        game.toggleSelected();
        this.setState({ games: this.state.games, basket: newBasket }, ()=>{console.log(this.state.basket)});
    }

    render() {
        return (
            <Router>
                <div className="app">
                    <div className="background-img-container">
                        <Link to="/checkout">
                            <img className="background-img-container__background-img" src={background}/>
                        </Link>
                    </div>
                    <div className="background-container">
                        <div className="background-container__header">
                            <img className="background-container__header--img" src={telephone} alt="telephone"/>
                            <p>1337 1337 1337</p>
                            <img className="background-container__header--img" src={flag} alt="flag"/>
                            <p>Try another Castle </p>
                        </div>
                        <img className="background-container__logo-img" src={logo} alt="game hub logo"/>
                    </div>
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
    