import React from 'react'
import Airlines from '../images/airline.jpg'
import Resort from '../images/resort.jpg'
import Travel from '../images/travel.jpg'
import Tourism from '../images/tourism.jpg'
import Recreational from '../images/recreational.jpg'

const TargetMarketHome = () => {

    return(
        <div>
            <div>
                <h2>Target Market</h2>
                <div className="headline"></div>
                <p>To whom are we trying to sell ? Our primary target market includes:</p>
            </div>
            <div className="targetMarkets">
                <div>
                    <div><img src={Airlines} alt=""/></div>
                    <div><p>1.	Airlines</p></div>
                </div>
                <div>
                    <div><img src={Resort} alt=""/></div>
                    <div><p>2.	Hotel and Resort Centers</p></div>
                </div>
                <div>
                    <div><img src={Travel} alt=""/></div>
                    <div><p>3.	Travel tour guide companies</p></div>
                </div>
                <div>
                    <div><img src={Tourism} alt=""/></div>
                    <div><p>4.	Recreational Tourist agencies</p></div>
                </div>
                <div>
                    <div><img src={Recreational} alt=""/></div>
                    <div><p>5.	Ministry of Tourism</p></div>
                </div>
            </div>
        </div>
    )
}

export default TargetMarketHome