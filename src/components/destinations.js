import React from 'react'
import Header from '../header/header'
import Map from '../images/map.svg'
import Facebook from '../images/facebookIcon2.svg'
import Instagram from '../images/instagramIcon2.svg'
import Twitter from '../images/twitterIcon2.svg'
import Youtube from '../images/youtubeIcon2.svg'
import Fade from 'react-reveal/Fade';


const Destinations = () => {

    return (
        <div className="destinations" >
            <div className="headerbg">
                <Header/>
            </div>
                <div className="destinations-map">
                <Fade top>
                    <h2>A look at AFRICA</h2>
                </Fade>
                    <div className="headline"></div>
                <Fade bottom>
                    <img src={Map} alt="Map Pic"/> 
                </Fade>
            </div>

            <div className="social">
                <p>Connect with Us</p>
                <div className="footClass">
                    <div><img src={Facebook} alt="Facebook Icon"/></div>
                    <div><img src={Twitter} alt="Twitter Icon"/></div>
                    <div><img src={Youtube} alt="Youtube Icon"/></div>
                    <div><img src={Instagram} alt="Instagram Icon"/></div>
                </div>
            </div>

        </div>
    )
}

export default Destinations





