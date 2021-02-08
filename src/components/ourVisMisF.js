import React from 'react'
import VisMis from '../components/ourVisMisBrief'
import { ourMisVisData } from '../data/ourVisMisData'
import Fade from 'react-reveal/Fade';



const OurVisMisF = () => {
    const points = ourMisVisData.map( data => 
        <Fade left>
            <div>
                <VisMis data={data}/>
            </div>
        </Fade>

    )
    return points
}

export default OurVisMisF