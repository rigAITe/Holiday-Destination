import React from 'react'
import Header from '../header/header'
import Footer from './footer'

const Contact = () => {

    return (
        <div>
            <div className="headerbg">
                <Header/>
            </div>
            <div className="contact">
                {/* <h2>Subscribe to our News Letter</h2> */}
                <div className='form'>
                    <h2>Contact Form</h2>
                    <form action="https://usebasin.com/f/54de9033c28b" method="POST" >
                            <div>
                                <input type="text" placeholder="Firstname"  name="firstname" required/>
                            </div>
                            <div>
                                <input type="text" placeholder="Lastname" name="lastname" required/>
                            </div>
                            <div>
                                <input type="email" placeholder="Email" name="email" required/>
                            </div>
                            {/* <div>
                                <input type="text" placeholder="Service Description" name="service" required/>
                            </div> */}
                            <div>
                                <textarea type="text" placeholder="Message" name="message" required/>
                            </div>

                            <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.6422298680423!2d3.341233614297137!3d6.580664724323002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b921c7da769ff%3A0xa8d19e635fcd34fe!2s56%20Oladipo%20Bateye%20Rd%2C%20Ikeja%20GRA%2C%20Ikeja%2C%20Nigeria!5e1!3m2!1sen!2snl!4v1612797001634!5m2!1sen!2snl" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" title="address"></iframe>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2622689146547!2d3.3846100142972007!3d6.614301723937264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93039c415fbf%3A0xbf8280977303471a!2s59%20Adetoro%20Adelaja%20St%2C%20Ikosi%20Ketu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1610770710492!5m2!1sen!2sng" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" title="address"></iframe> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact