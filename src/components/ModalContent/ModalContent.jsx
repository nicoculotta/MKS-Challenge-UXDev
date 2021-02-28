import React from 'react';
import Chart from '../Chart/Chart';
import './ModalContent.css';

const ModalContent = () => {
    return (
        <div className='bg-modal'>
            <div className="content-modal__top">
                <div className="content-modal__header">
                    <h2>Facebook followers</h2>
                    <div className="content-modal__username">
                        <img src='./images/icon-facebook.svg' alt="icon"/>
                        <h4 className="username">@nathanf</h4>
                    </div>            
                </div>
                <div className="content-modal__stats">
                    <div className="stats">
                        <h4>1978</h4>
                        <span>Total <br/> followers</span>
                    </div>
                    <div className="stats green">
                        <img src="./images/icon-up.svg" alt="icon" width="10" height="6"/>
                        <h4>81</h4>
                        <span>New followers in <br/> the past 10 days</span>
                    </div>
                    <div className="stats green">
                        <img src="./images/icon-up.svg" alt="icon" width="10" height="6"/>
                        <h4>12</h4>
                        <span>New followers <br/>TODAY</span>
                    </div>
                </div>
            </div>
            <div className="content-modal__bottom">
                <p>May 4 - May 13</p>
                <div className="content-moda__chart">
                    <Chart/>
                </div>
            </div>
        </div>
    )
}

export default ModalContent
