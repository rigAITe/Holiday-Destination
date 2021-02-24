import React from 'react'
import Header from '../header/header'
import Passport1 from '../images/passport1.jpg'
import Passport2 from '../images/passport2.jpg'
import Passport3 from '../images/passport3.jpg'
import Passport4 from '../images/passport4.jpg'
import Fade from 'react-reveal/Fade';
import Footer from './footer'

const VisaApplication = () => {

    return(
        <div>
            <div className="headerbg">
                <Header/>
            </div>
            <div className="visa-application">
                <div>
                <Fade left>
                    <h2>Visa Application</h2>
                    <p>Visa application in Nigeria can be exhausting and takes all the fun out of travelling! Do  not worry! We are right here to get it all done. Kindly fill in our newsletter at the contact box and let's get that visa applied just for you!</p>
                </Fade>
                </div>
                <div className="visa-application-inner">
                    <Fade down>
                        <div><img src={Passport1} alt="Passport Img"/></div>
                        <div><img src={Passport2} alt="Passport Img"/></div>
                    </Fade>
                    <Fade up>
                        <div><img src={Passport3} alt="Passport Img"/></div>
                        <div><img src={Passport4} alt="Passport Img"/></div>
                    </Fade>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default VisaApplication