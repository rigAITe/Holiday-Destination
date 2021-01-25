import React from 'react'
import Logo from '../assets/Logo.svg'
import Address from '../images/addressIcon.svg'
import Phone from '../images/phoneIcon.svg'
import Facebook from '../images/facebookIcon.svg'
import Instagram from '../images/instagramIcon.svg'
import Twitter from '../images/twitterIcon.svg'
import Youtube from '../images/youtubeIcon.svg'


const Footer = () => {

    return (
        <footer >
            <div>
                <div className="logoIcon">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div>
                    <div className='footClass'>
                        <div><img src={Address} alt="Address Icon"/></div>
                        <div><h3>Address:</h3></div>
                    </div>
                    <p>No. 56 Oladipo Bateye, G.R.A Ikeja, Lagos</p>
                    <div className='footClass'>
                        <div><img src={Phone} alt="Phone Icon"/></div>                    
                        <div><h3>Phone</h3></div>
                    </div>
                    <p>+234 90 9111 1165</p>
                </div>
            </div>
            <div className="social ">
                <p>Connect with Us</p>
                <div className="footClass">
                    <div><img src={Facebook} alt="Facebook Icon"/></div>
                    <div><img src={Twitter} alt="Twitter Icon"/></div>
                    <div><img src={Youtube} alt="Youtube Icon"/></div>
                    <div><img src={Instagram} alt="Instagram Icon"/></div>
                </div>
                <p>Powered by Intergr8</p>
            </div>
        </footer>
    )
}


export default Footer