import React from 'react'
import Typical from 'react-typical'
import { HashLink as Link } from 'react-router-hash-link';

const MainHeader = () => {

    return(
        
            <div className="inner-header">
                <div className="reveal">
                    <h2><Typical
                        steps={["Let's Make Your Best Trip Ever", 1000,' Don’t Listen to what they say, Go see ', 3000]}
                        loop={Infinity}
                        // wrapper="p"
                        /> 
                    </h2>
                </div>
                <div className="sub-header">
                    <h2>Holiday Destinations with <span>John</span></h2>
                    <p>A travel tourism inclined company designed to explore beautiful hidden destination round the globe aiding her audience to create dynamic spectacular travel experiences. </p>
                    <Link to='#aboutIntergr8'><span className="scroll">Scroll Down</span></Link>
                </div>
            </div>
    )
}

export default MainHeader


