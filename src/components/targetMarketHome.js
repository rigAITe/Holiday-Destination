import React from 'react'
import Airlines from '../images/airline.svg'
import Resort from '../images/resort.svg'
import Travel from '../images/tour.svg'
import Tourism from '../images/tourism.svg'
import Recreational from '../images/recreational.svg'

const TargetMarketHome = () => {

    return(
        <div className="targetMarkets">
            <div className="targetMarkets-header">
                <h2>Target Market</h2>
                <div className="headline"></div>
                <p>To whom are we trying to sell?  Our primary target market includes:</p>
            </div>
            <div className="targetMarkets-inner-main">
                <div className="targetMarkets-inner">
                    <div>
                        <div><img src={Recreational} alt=""/></div>
                        <div><p>	Recreational Tourist agencies</p></div>
                    </div>
                    <div>
                        <div><img src={Resort} alt=""/></div>
                        <div><p>	Hotel and Resort Centers</p></div>
                    </div>
                    <div>
                        <div><img src={Travel} alt=""/></div>
                        <div><p>	Travel tour guide companies</p></div>
                    </div>
                    <div>
                        <div><img src={Airlines} alt=""/></div>
                        <div><p>	Airlines</p></div>
                    </div>
                    <div>
                        <div><img src={Tourism} alt=""/></div>
                        <div><p>	Ministry of Tourism</p></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TargetMarketHome