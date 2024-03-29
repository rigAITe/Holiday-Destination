import React from 'react'
import Typical from 'react-typical'
import { HashLink as Link } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';

const MainHeader = () => {

    return(
        
            <div className="inner-header">
                <div className="reveal">
                    <h2><Typical
                        steps={[" ", 1000,"Let's Make Your Best Trip Ever", 3000]}
                        loop={Infinity}
                        // wrapper="p"
                        /> 
                    </h2>
                </div>
                <Fade left>
                    <div className="sub-header">
                        <h2>Holiday Destinations with <span>John</span></h2>
                        <p>A travel tourism inclined company designed to explore beautiful hidden destination round the globe aiding her audience to create dynamic spectacular travel experiences. </p>
                        <Link to='#aboutIntergr8'><span className="scroll">Scroll Down</span></Link>
                    </div>
                </Fade>
            </div>
    )
}

export default MainHeader


