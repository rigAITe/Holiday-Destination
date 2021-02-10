import React from 'react'
// import Testing from './testing'
import Header from '../header/header'
import Example from '../components/carousel'
import MainSecondaryTarget from '../components/mainSecondaryTarget'
import Footer from '../components/footer'




const TargetMarket = () => {

    return(
        <div className="targetMarket-Bg">
            <div className="targetMarket">
                <div className="headerbg">
                    <Header/>
                </div>
                <div className="targetMarket-inner">
                    <Example/>
                </div>
            </div>
            <MainSecondaryTarget/>
            <Footer/>
        </div>
    )
}

export default TargetMarket