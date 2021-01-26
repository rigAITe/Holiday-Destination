import React from 'react'
import Header from '../header/header'
import Facebook from '../images/facebookIcon2.svg'
import Instagram from '../images/instagramIcon2.svg'
import Twitter from '../images/twitterIcon2.svg'
import Youtube from '../images/youtubeIcon2.svg'


const ContentOutline = () => {

    return(
        <div className="content-container">
            <div className="content-outline">
                <div className="headerbg">
                    <Header/>
                </div>
                <div  className="content-outline-inner">
                    <div>
                        <h2>Content Outline as Follows</h2>
                        <div className="headlines"></div>
                        <p className="content-outline-list-header">We envisioned an avenue wherein we get to:</p>
                    </div>
                    <div className="content-outline-list" >
                        <div>
                            <p>	Explore the transport system of visiting countries from the airport to the bus/cab down to hotel reservation and touring round.</p>
                        </div>
                        <div>
                            <p>Explore culture diversities and traditional environment.</p>
                        </div>
                        <div>
                            <p>	Explore food creativity and diversities as well as hospitality ethics exercised in various countries, respectively.</p>
                        </div>
                        <div>
                            <p>	Explore local languages.</p>
                        </div>
                        <div>
                            <p> Explore seasonal weather and time zones of various regions, sunset, sunrise.</p>
                        </div>
                        <div>
                            <p>	Explore structured institutions known for tourist attractions such as malls, museums, archives, libraries, etc.</p>
                        </div>
                        <div>
                            <p> Explore recreational avenues; boat cruise, surfing, site seeing etc.</p>
                        </div>
                        <div>
                            <p> Explore historical citadels.</p>
                        </div>
                        <div>
                            <p> Explore local markets, enterprise diversities, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="social ">
                    <p>Connect with Us</p>
                    <div className="footClass">
                        <div><img src={Facebook} alt="Facebook Icon"/></div>
                        <div><img src={Twitter} alt="Twitter Icon"/></div>
                        <div><img src={Youtube} alt="Youtube Icon"/></div>
                        <div><img src={Instagram} alt="Instagram Icon"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentOutline