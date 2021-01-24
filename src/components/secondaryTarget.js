import React from 'react'
import Travelers from '../images/travelers.svg'


const SecondaryTarget = () => {

    return (
        <div>
            <div className="secTagtHead">
                <h2>Our Secondary Target Market Includes:</h2>
                <div className="headlines"></div>
            </div>
            <div className="secondaryTarget">
                <div>
                    <p>Travelers</p>
                    <img src={Travelers} alt="Travelers Pic"/>
                </div>
                <div>
                    <h2 className='secondaryTarHeader'>Why those Customers?</h2>
                    <p>The travel and tourism enterprise are a well know lucrative sector which cuts across various works of life. It is built up of a supply chain management which involves the aviation sector, hospitality sector and even recreation. All arms come together to work and meet a certain target which is rendering RELAXATION SERVICES.</p>
                    <div className="secButton">
                        Read More
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SecondaryTarget