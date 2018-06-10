import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {GameDisplaySmall} from '../game-display-small/game-display-small';

export class Basket extends Component {

    constructor(props) {
        super(props)

        this.state = {
            basket: this.props.basket,
            removeFromBasket: this.props.removeFromBasket,
        }

        //this.removeFromBasket = this.props.removeFromBasket;
        this.testFunc = this.testFunc.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            basket: nextProps.basket
        })
    }

    testFunc() {
        console.log(this.state)
        this.setState({basket: this.state.basket})
    }

    render() {
        return (
                <div className="basket">
                    <span className="basket--title">Basket</span>
                    {   this.state.basket.length > 0 ?
                        (<div className="basket__products">
                            {
                                this.state.basket
                                    .map((game, index) =>{
                                        return (
                                        <div key={game.id}>
                                            <GameDisplaySmall 
                                                game={game}
                                                removeFromBasket={this.state.removeFromBasket}/>
                                            {   this.state.basket.length > 1 &&
                                                <div className="basket__products--line"></div>
                                            }
                                        </div>)}
                                )
                            }
                        </div>) :
                        (<span className="basket--no-items">No items</span>)
                    }
                    <div className="basket__footer">
                        <div className="basket__footer__price-box">
                            <span className="basket__footer__price-box--total">Total</span>
                            <span className="basket__footer__price-box--price">{this.state.basket.reduce((acc, curr)=>acc+curr.price, 0)} Gli</span>
                        </div>
                        
                        <Link to={this.state.basket.length>0 ? "/checkout" : "/"} style={{ textDecoration: 'none' }}>
                            <div className={`basket__footer__continue-btn ${this.state.basket.length>0 ? "basket__footer__continue-btn--selected": ""}`}>
                                {   this.state.basket.length === 0 &&
                                    <div className="basket__footer__continue-btn__grey-out"></div>
                                }       
                                Continue
                            </div>
                        </Link>
                    </div>
                </div>
        )
    }
}