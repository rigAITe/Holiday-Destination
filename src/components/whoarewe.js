import React from 'react'
import Booking from '../images/booking.jpg'
import Flight from '../images/flight.jpg'
import Holiday from '../images/holiday.jpg'
import Hotel from '../images/hotel.jpg'
import Visa from '../images/visa.jpg'

const WhoAreWe = () => {

    return(
        <div className="aboutIntergr8" id='aboutIntergr8'>
            <div>
                <h2>Who are we?</h2>
                <div className="headline"></div>
                <p className="aboutIntergr8-inner">INTERGR8 is designed to facilitate travelers by rendering travel services such as:</p>
            </div>
            <div className="services">
                <div>
                    <img src={Visa} alt="Visa Pic"/>
                    <p>Visa Application</p>
                </div>
                <div>
                    <img src={Booking} alt="Booking Pic"/>
                    <p>Booking Ticket</p>
                </div>
                <div>
                    <img src={Hotel} alt="Hotel Pic"/>
                    <p>Hotel Reservation</p>
                </div>
                <div>
                    <img src={Flight} alt="Flight Pic"/>
                    <p>Flight Arrangements</p>
                </div>
                <div>
                    <img src={Holiday} alt="Holiday Pic"/>
                    <p>Holiday Arrangements</p>
                </div>
            </div>
            <div>
                <p className="aboutIntergr8-inner">Lending listening ears to customers (travelers) who lament about the unease feeling when trying to search for tour guides or directions to spending their holidays at desired destinations, the company decided to take a bold leap of faith by proffering solutions to long-time complaints. Hence, the vision to take travelers to beautiful affordable hidden holiday destinations was birth.</p>
            </div>
        </div>
    )
}

export default WhoAreWe