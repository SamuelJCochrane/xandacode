import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { GameDisplaySmall } from "../shared/game-display-small";

export class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: this.props.basket,
      removeFromBasket: this.props.removeFromBasket,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
        basket: nextProps.basket
    })
}

  render() {
    return (
      <div className="checkout">
        <div className="checkout__products-container">
            <Link to="/" style={{ textDecoration:"none" }}>
                <div className="checkout__products-container__go-back-btn">Go back</div>
            </Link>
                {this.state.basket.map((game, index) => {
                    return (
                    <div key={game.id}>
                        <GameDisplaySmall
                        game={game}
                        removeFromBasket={this.state.removeFromBasket}
                        />
                        {this.state.basket.length > 1 && (
                            <div className="checkout__products-container--line" />
                        )}
                    </div>
                    );
                })}
            <div className="checkout__products-container__total">
                <span className="checkout__products-container__total--total">Total </span> 
                <span className="checkout__products-container__total--price">{this.state.basket.reduce((acc, curr)=>acc+curr.price, 0)} Gil</span>
            </div>
        </div>
      </div>
    );
  }
}
