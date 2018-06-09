import React, {Component} from 'react';
//import game1 from '../../../assets/game1.jpg';
import coins from '../../../assets/coins.png';
import controller from '../../../assets/controller.png';



export class GameDisplayLarge extends Component {

    constructor(props) {
        super(props)
        this.game = this.props.game;
        this.addToBasket = this.props.addToBasket;

        this.onAddToBasket = this.onAddToBasket.bind(this);
    }

    onAddToBasket(game) {
        this.game.toggleSelected();
        this.addToBasket(game);
    }

    render() {
        return (
            <div className="product-box">
                {   this.game.selected &&
                    <div className="product-box__grey-out"></div>
                }
                <div className="product-box__cover-container">
                    <img src={this.game.image} className="product-box__cover-container--cover-img"/>
                </div>
                <div className="product-box__text">
                    <p className="product-box__text--title">{this.game.title}</p>
                    <p className="product-box__text--blurb">{this.game.blurb}</p>
                    <div className="product-box__text__price-box">
                        <img src={coins} alt="coins"/><p>{this.game.price} Gil</p>
                    </div>
                    <div className="product-box__text--add-button" onClick={() => this.onAddToBasket(this.game)}>
                        <span>Add to Basket</span>
                    </div>
                </div>
                <img src={controller} className="product-box--controller-img"/>
            </div>
        )
    }
}