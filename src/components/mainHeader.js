import React from 'react'
import Typical from 'react-typical'

const MainHeader = () => {

    return(
        
        // <div className="main-header">
            <div className="inner-header">
                <div className="reveal">
                    <h2><Typical
                        steps={['', 1000,"Let's Make Your Best Trip Ever, Don’t Listen to what they say, Go see", 3000]}
                        loop={Infinity}
                        // wrapper="p"
                        /> 
                    </h2>
                </div>
                <div className="sub-header">
                    <span>Intergr8 Presents</span>
                    <h2>Holiday Destinations with <span>John</span></h2>
                    <p>A travel tourism inclined company designed to explore beautiful hidden destination round the globe aiding her audience to create dynamic spectacular travel experiences. </p>
                    <span>Scroll Down</span>
                </div>
            </div>
        // </div>
    )
}

export default MainHeader


