import React from 'react'
import VisMis from '../components/ourVisMisBrief'
import { ourMisVisData } from '../data/ourVisMisData'


const OurVisMisF = () => {
    const points = ourMisVisData.map( data => <VisMis data={data}/>)
    return points
}

export default OurVisMisF