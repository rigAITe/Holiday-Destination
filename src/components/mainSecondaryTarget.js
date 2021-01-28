import React from 'react'
import Travelers from '../images/travelers.svg'


const MainSecondaryTarget = () => {

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
                    <p><span>HOLIDAY DESTINATIONS WITH JOHN</span> aims at taking this supply chain from where they are to the living room of its consumers who are their customers, showcasing them certain offers they could never had fathom actually existed or imagined to be real. </p>
                    <p>
                        The project specific objectives are:
                        - To enable airlines, have access to widely reached outdoor advertising space to showcase their brand contents as to how travelling can be achieved seamlessly and greatly affordable.
                        - To enable travelers explore widely spread opportunities in patronizing exquisite hospitality institutions and facilities at incredible rates which are hard to come by, as these facilities are given opportunities to tell the world who they are and what they are made of as an organization.
                        - To project local market enterprise and showcase local contents in diversities of nations.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default MainSecondaryTarget