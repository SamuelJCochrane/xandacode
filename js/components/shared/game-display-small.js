import React, {Component} from 'react';
import game1 from '../../../assets/game1.jpg';
import coins from '../../../assets/coins.png';
import bin from '../../../assets/bin.png';

export class GameDisplaySmall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            game: this.props.game
        }

        this.removeFromBasket = this.props.removeFromBasket;
        this.testFunc = this.testFunc.bind(this);
    }

    testFunc() {
        console.log(this.state)
    }

    render() {
        return (
            <div className="game-display-small">
                <img src={this.state.game.image} className="game-display-small--cover-img" onClick={this.testFunc}/>
                <div className="game-display-small__middle-content">
                    <span className="game-display-small__middle-content--title">{this.state.game.title}</span>
                    <div className="game-display-small__middle-content__price-box">
                        <img src={coins} className="game-display-small__middle-content__price-box--coins-img"/>
                        <span className="game-display-small__middle-content__price-box--text">{this.state.game.price} gli</span>
                    </div>
                </div>
                <img src={bin} className="game-display-small--bin-img" onClick={() => {console.log(this.state.game); this.removeFromBasket(this.state.game)}}/>
            </div>
        )
    }
}