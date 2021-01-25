import React from 'react'
import MainHeader from './mainHeader'
import Header from '../header/header'
import WhoWeAre from '../components/whoarewe'
import OurVisMisF from '../components/ourVisMisF'
import TargetMarketHome from '../components/targetMarketHome'
import SecondaryTarget from '../components/secondaryTarget'
import Footer from '../components/footer'

const Home = () => {

    return(
        <div>
            <div className="main-header">
                <div>
                    <Header/>
                </div>
                <MainHeader/>
            </div>
            <WhoWeAre/>
            <div className="visMisBiz">
                <OurVisMisF/>
            </div>
            <TargetMarketHome/>
            <SecondaryTarget/>
            <Footer/>
        </div>
    )
}

export default Home
