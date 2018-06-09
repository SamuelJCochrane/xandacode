import React, {Component} from 'react';

import {Store} from '../store/store';
import {Basket} from '../store/basket';

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
        this.testFunc = this.testFunc.bind(this);
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

    testFunc() {
        this.setState({basket: this.state.basket}, ()=>{console.log(this.state)})
    }

    render() {
        return (
            <div className="app">
                <div className="background-img-container">
                    <img className="background-img-container__background-img" src={background}/>
                </div>
                <div className="background-container">
                    <div className="background-container__header">
                        <img className="background-container__header--img" src={telephone} alt="telephone"/>
                        <p>1337 1337 1337</p>
                        <img className="background-container__header--img" src={flag} alt="flag"/>
                        <p>Try another Castle </p>
                    </div>
                    <img className="background-container__logo-img" src={logo} alt="game hub logo" onClick={this.testFunc}/>
                </div>
                <Store
                    games={this.state.games}
                    addToBasket={this.addToBasket}
                />
                <Basket
                    basket={this.state.basket}
                    removeFromBasket={this.removeFromBasket}/>
            </div>
        )
    }
}
    