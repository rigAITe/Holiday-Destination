import React from 'react'
import Header from '../header/header'
import Reservation1 from '../images/reservation1.jpg'
import Reservation2 from '../images/reservation2.jpg'
import Reservation3 from '../images/reservation3.jpg'
import Fade from 'react-reveal/Fade';
import Footer from './footer'

const HotelReservation = () => {

    return(
        <div>
            <div className="headerbg">
                <Header/>
            </div>
            <div className="visa-application">
                <Fade left>
                    <div>
                        <h2>Flight Arrangement</h2>
                        <p>What is travelling without having a 5star hotel to cool off at?? We are here to help, your safety matters.. If you think COVID -19 may affect your plans, kindly let us know in our Contact us Feedback.Nevertheless,  here is what you should know now! Government travel restrictions and advisors. Travelling may be permitted only for certain purposes and in part, but not to worry! Let Intergr8 help you establish that fun journey from landing to riding to your hotel! Simply fill up our CONTACT US, and let's make booking even more interesting </p>
                    </div>
                </Fade>
                <div className=" reservation">
                    <Fade right>
                        <div className="reserve1"><img src={Reservation1} alt='Reservation 1' /></div>
                        <div className="reserve2"><img src={Reservation2} alt='Reservation 2' /></div>
                        <div className="reserve3"><img src={Reservation3} alt='Reservation 3' /></div>
                    </Fade>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HotelReservation