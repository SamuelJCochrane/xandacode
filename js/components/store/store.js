import React, {Component} from 'react';
import {GameDisplayLarge} from '../game-display-large/game-display-large';
import {Basket} from '../basket/basket';
import {gamesArr} from '../../info/game-info';

export class Store extends Component {

    constructor(props) {
        super(props)
        this.state = {
            games: this.props.games,
            basket: this.props.basket,
            addToBasket: this.props.addToBasket,
            removeFromBasket: this.props.removeFromBasket,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            basket: nextProps.basket
        })
    }

    render() {
        return (
            <div className="store">
                <div className="store__product-display">
                    { this.state.games &&
                        <div>
                            <div className="store__product-display__row">
                                {
                                    this.state.games.map((game, index) =>
                                        <GameDisplayLarge 
                                            key={index}
                                            game={game}
                                            addToBasket={this.state.addToBasket}/>
                                    )
                                }
                            </div>
                            {/* <div className="row store__product-display__row store__product-display__row--row2">
                                {
                                    this.state.games.slice(2,4).map((game, index) => 
                                        <GameDisplayLarge 
                                            key={index}
                                            game={game}
                                            addToBasket={this.state.addToBasket}/>
                                    )
                                }
                            </div> */}
                        </div>
                    }
                </div>
                <Basket
                    basket={this.state.basket}
                    removeFromBasket={this.state.removeFromBasket}/>
            </div>
        )
    }
}