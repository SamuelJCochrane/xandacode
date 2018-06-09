import React, {Component} from 'react';
import {GameDisplayLarge} from '../store/game-display-large';
import {gamesArr} from '../../info/game-info';

export class Store extends Component {

    constructor(props) {
        super(props)
        this.state = {
            games: this.props.games,
            addToBasket: this.props.addToBasket,
        }
    }

    render() {
        return (
            
            <div className="product-display">
                { this.state.games &&
                    <div>
                        <div className="product-display__row product-display__row--row1">
                            {
                                this.state.games.slice(0,2).map((game, index) =>
                                    <GameDisplayLarge 
                                        key={index}
                                        game={game}
                                        addToBasket={this.state.addToBasket}/>
                                )
                            }
                        </div>
                        <div className="product-display__row product-display__row--row2">
                            {
                                this.state.games.slice(2,4).map((game, index) => 
                                    <GameDisplayLarge 
                                        key={index}
                                        game={game}
                                        addToBasket={this.state.addToBasket}/>
                                )
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}