import React from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <div className="card">
            <div className="card__top">
                <span>{props.title}</span>
                <img src={props.iconSocial} alt={props.alt}/>
            </div>
            <div className="card__body">
                <span>{props.number}</span>
                <div className={`card__body__stats card__body__stats--${props.statsValue}`}>
                    <img src={ props.statsValue === 'up' ? "./images/icon-up.svg" : "./images/icon-down.svg" } alt="icon" width="8" height="4"/>
                    <span>{props.statsNum} %</span>
                </div>
            </div>
        </div>
    )
}

export default Cards
