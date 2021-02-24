import React from 'react'
import Header from '../header/header'
import Ticket from '../images/ticket.jpg'
import Fade from 'react-reveal/Fade';
import Footer from './footer'

const BookingTicket = () => {

    return(
        <div>
            <div className="headerbg">
                <Header/>
            </div>
            <div className="visa-application">
                <Fade left>
                    <div>
                        <h2>Booking Tickets</h2>
                        <p>At Intergr8, booking your ticket just got even more interesting! We are keen on making sure you fly with the best airline that will get to your destination right on time! No need panicking on rushing down to the airport to check in, that is why you have us to run such errand even online!Most Searched Airlines:</p>
                        <div className=" ticket">
                            <div>South African Airways</div>
                            <div>American Airlines</div>
                            <div>Delta Airways</div>
                            <div>Emirate Airline</div>
                            <div>Qatar Airline</div>
                        </div>
                    </div>
                </Fade>
                <div className="visa-application-inner">
                    <Fade right>
                        <img src={Ticket} alt="Ticket Img"/>
                    </Fade>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BookingTicket