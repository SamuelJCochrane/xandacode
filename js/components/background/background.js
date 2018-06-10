import React, {Component} from 'react';

import telephone from '../../../assets/telephone.png';
import flag from '../../../assets/flag.png';
import logo from '../../../assets/logo.png';
import background from '../../../assets/background.jpg';

export const Background = (props) => 
        <div className="background-wrapper">
            <div className="background-wrapper__background-img-container">
                <img className="background-wrapper__background-img-container__background-img" src={background}/>
            </div>
            <div className="background-wrapper__background-container">
            <div className="background-wrapper__background-container__header">
                <img className="background-wrapper__background-container__header--img" src={telephone} alt="telephone"/>
                <p>1337 1337 1337</p>
                <img className="background-wrapper__background-container__header--img" src={flag} alt="flag"/>
                <p>Try another Castle </p>
            </div>
                <img className="background-wrapper__background-container__logo-img" src={logo} alt="game hub logo"/>
            </div>
        </div>