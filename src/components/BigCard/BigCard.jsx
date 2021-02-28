import React from 'react';
import './BigCard.css';

const BigCard = (props) => {
    const { handlerModalOpen } = props;
    
    return (
        <div className="big-card" onClick={ handlerModalOpen }>
            <div className={`big-card__border big-card__border--${props.border}`}></div>
            <div className="big-card__header">
                <img src={props.iconSocial} alt="icon"/>
                <h4 className="username">{props.username}</h4>
            </div>
            <div className="big-card__followers">
                <span>{props.followersNum}</span>
                <span>{props.followersType}</span>
            </div>
            <div className={`big-card__stats big-card__stats--${props.statsValue}`}>
                <img src={ props.statsValue === 'up' ? "./images/icon-up.svg" : "./images/icon-down.svg" } alt="icon" width="8" height="4"/>
                <span>{props.statsNum} Today</span>
            </div>
        </div>
    )
}

export default BigCard;
